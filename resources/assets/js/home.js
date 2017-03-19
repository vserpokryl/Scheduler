const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: () => import('./../vue/home.vue')
        },
        {
            path: '/login', component: () => import('./../vue/login.vue')
        },
        {
            path: '/register', component: () => import('./../vue/register.vue')
        },
        {
            path: '/password_reset', component: () => import('./../vue/password_reset.vue')
        },
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

Vue.component('form-input', require('./../vue/form-input.vue'));
Vue.component('form-checkbox', require('./../vue/form-checkbox.vue'));

new Vue({router}).$mount('#app');