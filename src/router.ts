/**
 * Created by Gal on 25/01/2018.
 */
import VueRouter from 'vue-router';
import Login from './views/Login.vue';
import Main from './views/Main.vue';
import About from './views/Main/About';

const routes = [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {
        children: [{path: 'about', component: About}],
        component: Main,
        path: '/main',
    },
];

const router = new VueRouter({
    routes,
});

export default router;
