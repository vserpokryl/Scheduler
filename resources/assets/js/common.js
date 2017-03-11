import Vue from 'vue'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
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
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};