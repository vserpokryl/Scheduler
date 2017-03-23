const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: () => import('./../vue/guest/home.vue')
        },
        {
            path: '/login', component: () => import('./../vue/guest/login.vue')
        },
        {
            path: '/register', component: () => import('./../vue/guest/register.vue')
        },
        // {
        //     path: '/password_reset', component: () => import('./../vue/guest/password_reset.vue')
        // },
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

Vue.component('form-input', require('./../vue/components/form-input.vue'));
Vue.component('form-checkbox', require('./../vue/components/form-checkbox.vue'));

new Vue({router}).$mount('#app');