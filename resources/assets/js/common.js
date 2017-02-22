import Vue from 'vue'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
import jQuery from 'jquery'
import axios from 'axios'

Vue.use(VueRouter);
Vue.component(vSelect);

if (process.env.NODE_ENV === "development") {
    window.Vue = Vue;
}

window.$ = window.jQuery = jQuery;
window.axios = axios;
window.VueRouter = VueRouter;
window.Vue = Vue;
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    'X-Requested-With': 'XMLHttpRequest'
};