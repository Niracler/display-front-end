import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from './store/store.js';
import './axios/'; //全局加载resource拦截器
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import './assets/css/style.css'
import 'chart.js/dist/Chart.bundle.min'
import moment from 'moment/moment.js'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
    dsn: 'https://d57514dec9934399ba18f77a58959b92@sentry.io/1774579',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
});


Vue.config.productionTip = false;
Vue.prototype.$http = axios;


export const label_colors = [
    "label-primary",
    "label-secondary",
    "label-success",
    "label-danger",
    "label-warning",
    "label-info",
    "label-light",
    "label-dark",
];

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

//全局的过滤器
Vue.filter('msgFormat', function (msg, num = 150) {
    if (!msg) return '';
    if (msg.length > num) {
        return msg.slice(0, num) + '...'
    }
    return msg
});

Vue.filter('dateStr',function(value, format='YYYY-MM-DD HH:mm:ss'){
    return moment(value, format).fromNow();
});