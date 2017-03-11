import NProgress from 'nprogress'

window.NProgress = NProgress;

NProgress.start();

window.countAssets = 2;

window.loadedAssets = () => {
    countAssets--;
    if (countAssets === 0) {
        NProgress.done();
        document.body.className = document.body.className.replace('loaderProgress', '');
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    }
};

let link = document.createElement('link');
link.href = document.querySelector('meta[name="app-css-path"]').getAttribute('content');
link.rel = 'stylesheet';
link.onload = () => {
    loadedAssets();
};

document.head.appendChild(link);