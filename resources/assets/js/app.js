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
new Vue({
    el: '#app2',
    data: {
        selected: null,
        options: [
            {value: 'foo', label:'tuuu1'},
            {value: 'bar', label:'tuuu2'},
            {value: 'baz', label:'tuuu3'}
        ]
    },
});
