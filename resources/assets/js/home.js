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
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

new Vue({ router }).$mount('#app');