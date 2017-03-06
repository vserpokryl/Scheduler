import Vue from 'vue'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
import NProgress from 'nprogress'
import jQuery from 'jquery'
import axios from 'axios'


Vue.use(VueRouter);
Vue.component('v-select', vSelect);

window.jQuery = window.$ = jQuery;

require('./bootstrap.min');
require('./material.min');

window.axios = axios;
window.Vue = Vue;
window.VueRouter = VueRouter;
window.NProgress = NProgress;
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};

$(document).ready(function(){

    $.material.init();

    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    if($('.navbar-color-on-scroll').length != 0){
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar)
    }

    $('[data-toggle="popover"]').popover();

});