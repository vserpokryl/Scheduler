'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const File = require('vinyl');
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

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isWatch = process.argv.indexOf('--watch') > -1;
const isServe = process.argv.indexOf('--serve') > -1;

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
            for (let key in assets) {
                assets['/css/' + key] = '/css/' + assets[key];
                delete assets[key];
            }
            file.contents = new Buffer(JSON.stringify(assets));
            callback(null, file);
        }))
        .pipe(gulp.dest('resources/assets/manifest'));

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
            new AssetsPlugin({
                filename: 'js.json',
                path:     __dirname + '/resources/assets/manifest',
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
                    return JSON.stringify(assets);
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

gulp.task('manifest', function() {
    const contents = [];

    return gulp.src('resources/assets/manifest/{js,css}.json')
        .pipe(through2(function(file, encoding, callback) {
            contents.push(JSON.parse(file.contents.toString()));
            callback();
        }, function(callback) {
            let manifest = new File({
                contents: new Buffer(JSON.stringify(Object.assign(...contents))),
                base: process.cwd(),
                path: process.cwd() + '/mix-manifest.json',
            });

            this.push(manifest);
            callback();
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('clean', function() {
    return del(['public/css', 'public/img', 'public/js', 'resources/assets/manifest', 'public/fonts']);
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/sass/fonts.css', gulp.series('fonts', 'styles'));
    gulp.watch('resources/assets/sass/**/*.scss', gulp.series('styles'));
    gulp.watch('resources/assets/img/**/*.*', gulp.series('assets'));
    gulp.watch('resources/assets/manifest/{js,css}.json', gulp.series('manifest'));
});

gulp.task('serve', function() {
    browserSync.init({
        proxy: 'raspisanie.edu'
    });

    browserSync.watch('public/**/*.js', () => {}).on('change', browserSync.reload);
});

gulp.task('fonts', function () {
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
    gulp.parallel('assets', 'styles', 'webpack'),
    'manifest'
];

if (isServe)
    tasksForBuild.push('serve');

if (isWatch)
    tasksForBuild.push('watch');


gulp.task('build', gulp.series(
    ...tasksForBuild
));