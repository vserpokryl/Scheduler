'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const File = require('vinyl');
const fs = require('fs');
const del = require('del');
const gulplog = require('gulplog');
const browserSync = require('browser-sync').create();

const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const asImport = require('postcss-import');
const sass = require('gulp-sass');

const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');
const through2 = require('through2').obj;
const notifier = require('node-notifier');
const googleWebFonts = require('gulp-google-webfonts');
const WebpackChunkHash = require('webpack-chunk-hash');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isWatch = process.argv.indexOf('--watch') > -1;
const isServe = process.argv.indexOf('--serve') > -1;

const manifest = new class {
    constructor() {
        this._manifest = {};
    }
    set(name, obj) {
        this._manifest[name] = obj;
        this.save();
    }
    save() {
        const contents = [];
        for (let key in this._manifest) {
            contents.push(this._manifest[key]);
        }
        fs.writeFile(process.cwd() + '/public/mix-manifest.json', new Buffer(JSON.stringify(Object.assign(...contents))), function(err) {
            if(err) {
                return console.log(err);
            }
        });
    }
};

gulp.task('styles', function() {

    return gulp.src('resources/assets/sass/app.scss')
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title:   'Styles',
                message: err.message
            }))
        }))
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss([asImport, cssnext]))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulpIf(!isDevelopment, cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(rev())
        .pipe(gulpIf(isDevelopment, through2(function(file, encoding, callback) {
            file.path = file.path.replace(/-.+\.css$/, '.css');
            callback(null, file);
        })))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream())
        .pipe(rev.manifest('css.json'))
        .pipe(through2(function(file, encoding, callback) {
            let assets = JSON.parse(file.contents.toString());
            let resultAssets = {};
            for (let key in assets) {
                if (assets.hasOwnProperty(key)) {
                    resultAssets['/css/' + key] = '/css/' + assets[key];
                }
            }
            manifest.set('styles', resultAssets);
            callback(null, file);
        }))

});

gulp.task('assets', function() {
    return gulp.src('resources/assets/img/**/*.*', {since: gulp.lastRun('assets')})
        .pipe(gulp.dest('public/img'));
});

gulp.task('webpack', function(callback) {

    let options = {
        entry:   {
            app: './resources/assets/js/app',
            common: './resources/assets/js/common'
        },
        output:  {
            path:     __dirname + '/public/js',
            publicPath: '/js/',
            filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js'
        },
        watch:   isDevelopment && isWatch,
        devtool: isDevelopment ? 'cheap-module-inline-source-map' : false,
        module:  {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                }, {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader'
                        }
                    }
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackChunkHash(),
            new AssetsPlugin({
                filename: 'manifest-js.json',
                path:     __dirname + '/resources/assets',
                processOutput(assets) {
                    for (let key in assets) {
                        if (assets.hasOwnProperty(key)) {
                            if (typeof assets[key] === 'string') {
                                delete assets[key];
                                continue;
                            }
                            assets['/js/' + key + '.js'] = '/js/' + assets[key].js.slice(options.output.publicPath.length);
                            delete assets[key];
                        }
                    }
                    manifest.set('js', assets);
                    return {};
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: isDevelopment ? '"development"' : '"production"'
                }
            })
        ]
    };

    if (!isDevelopment) {
        options.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                compress: {
                    warnings: false
                },
                comments: false
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        );

    }

    // https://webpack.github.io/docs/node.js-api.html
    webpack(options, function(err, stats) {
        if (!err) { // no hard error
            // try to get a soft error from stats
            err = stats.toJson().errors[0];
        }

        if (err) {
            notifier.notify({
                title: 'Webpack',
                message: err
            });

            gulplog.error(err);
        } else {
            gulplog.info(stats.toString({
                colors: true
            }));
        }

        // task never errs in watch mode, it waits and recompiles
        if (!options.watch && err) {
            callback(err);
        } else {
            callback();
        }

    });


});

gulp.task('clean', function() {
    return del(['public/css', 'public/img', 'public/js', 'resources/assets/manifest', 'public/fonts']);
});

gulp.task('clean:tempManifestFile', function() {
    return del(['resources/assets/manifest-js.json']);
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/sass/fonts.css', gulp.series('fonts', 'styles'));
    gulp.watch('resources/assets/sass/**/*.scss', gulp.series('styles'));
    gulp.watch('resources/assets/img/**/*.*', gulp.series('assets'));
    gulp.watch('resources/assets/manifest-js.json', gulp.series('clean:tempManifestFile'));
});

gulp.task('serve', function() {
    browserSync.init({
        proxy: 'raspisanie.edu'
    });

    browserSync.watch('public/**/*.js', () => {}).on('change', browserSync.reload);
});

gulp.task('fonts', function () {
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));

    const options = {
        fontsDir: 'fonts/',
        cssDir: '',
        cssFilename: 'fonts.css'
    };

    return gulp.src('resources/assets/sass/fonts.list')
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest(function(file) {
            if (file.path === options.cssFilename) {
                let contents = file.contents.toString();
                file.contents = new Buffer(contents.replace(new RegExp(options.fontsDir, 'g'), '/' + options.fontsDir));
                return 'resources/assets/sass/';
            }
            return 'public/';
        }));
});

let tasksForBuild = [
    'clean',
    'fonts',
    gulp.parallel('assets', 'styles', 'webpack')
];

let parallelTasks = [];

if (isServe)
    parallelTasks.push('serve');

if (isWatch)
    parallelTasks.push('watch');

parallelTasks.push('clean:tempManifestFile');

tasksForBuild.push(gulp.parallel(...parallelTasks));

gulp.task('build', gulp.series(
    ...tasksForBuild
));