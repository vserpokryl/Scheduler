import NProgress from 'nprogress'

window.NProgress = NProgress;

NProgress.start();

window.countAssets = 2;

window.loadedAssets = (withoutprogress) => {
    countAssets--;
    if (countAssets === 0) {
        if(withoutprogress)
            NProgress.done();

        let loader = document.getElementById('loader');
        let app = document.getElementById('app');

        app.style.display = 'block';
        loader.style.opacity = 0;
        loader.style.visibility = 'hidden';
    }
};

let link = document.createElement('link');
link.href = document.querySelector('meta[name="app-css-path"]').getAttribute('content');
link.rel = 'stylesheet';
link.onload = () => {
    loadedAssets();
};

document.head.appendChild(link);