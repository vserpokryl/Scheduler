import vSelect from 'vue-select'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/schedule', component: () => import('./../vue/admin/home.vue')
        },
    ],
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

Vue.component('form-input', require('./../vue/components/form-input.vue'));
Vue.component('form-checkbox', require('./../vue/components/form-checkbox.vue'));
Vue.component('v-select', vSelect);

new Vue({router}).$mount('#app');