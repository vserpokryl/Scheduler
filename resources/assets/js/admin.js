import vSelect from 'vue-select'
import vInput from './../vue/components/form-input.vue'
import vCheckbox from './../vue/components/form-checkbox.vue'
import vTable from './../vue/components/vue-table'
import VueDatepicker from './../vue/components/datepicker.vue'

window.appTitle = "Планировщик расписания";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/schedule', component: () => import('./../vue/admin/schedule.vue')
        },
        {
            path: '/edit/groups', component: () => import('./../vue/admin/groups.vue')
        },
        {
            path: '/edit/faculties', component: () => import('./../vue/admin/faculties.vue')
        },
        {
            path: '/edit/specialties', component: () => import('./../vue/admin/specialties.vue')
        },
        {
            path: '/edit/teachers', component: () => import('./../vue/admin/teachers.vue')
        },
        {
            path: '/edit/subjects', component: () => import('./../vue/admin/subjects.vue')
        },
        {
            path: '/edit/buildings', component: () => import('./../vue/admin/buildings.vue')
        },
        {
            path: '/edit/classrooms', component: () => import('./../vue/admin/classrooms.vue')
        },
        {
            path: '/statistics/employment/classrooms', component: () => import('./../vue/admin/employment.classrooms.vue')
        },
        {
            path: '/statistics/employment/teachers', component: () => import('./../vue/admin/employment.teachers.vue')
        },
        {
            path: '/edit/teachingloads', component: () => import('./../vue/admin/teachingloads.vue')
        },
    ],
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

Vue.component('form-input', vInput);
Vue.component('form-checkbox', vCheckbox);
Vue.component('v-table', vTable);
Vue.component('v-select', vSelect);
Vue.component('datepicker', VueDatepicker);

new Vue({router}).$mount('#app');

let transparent = true;
let navbar = $('.navbar-color-on-scroll');

$(document).ready(function() {

    if (navbar.length !== 0) {
        $(window).on('scroll', function () {
            if ($(document).scrollTop() > 260) {
                if (transparent) {
                    transparent = false;
                    navbar.removeClass('navbar-transparent');
                }
            } else {
                if (!transparent) {
                    transparent = true;
                    navbar.addClass('navbar-transparent');
                }
            }
        });
    }
});