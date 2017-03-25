const router = new window.VueRouter({
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

window.Vue.component('form-input', require('./../vue/components/form-input.vue'));
window.Vue.component('form-checkbox', require('./../vue/components/form-checkbox.vue'));

new window.Vue({router}).$mount('#app');