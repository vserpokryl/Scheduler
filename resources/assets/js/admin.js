const router = new VueRouter({
    mode: 'history',
    routes: [
        // {
        //     path: '/', component: () => import('./../vue/home.vue')
        // },
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

new Vue({router}).$mount('#app');