const User = {
    template: `<div>User {{ $route.params.id }}</div>`
};

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/user/:id', component: User }
    ]
});

new Vue({ router }).$mount('#app');