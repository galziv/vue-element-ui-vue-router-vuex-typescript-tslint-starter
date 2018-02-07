import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './views/App.vue';
import router from './router';
import store from './store';

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

