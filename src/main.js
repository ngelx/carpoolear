/* jshint esversion: 6 */

import Vue from 'vue';
import App from './App';

import VueResource from 'vue-resource';
import VueAnalytics from 'vue-analytics';
import VueMoment from 'vue-moment';
require('moment/locale/es');

import router from './router';
import store from './store';

/* eslint-disable no-unused-vars */
import cordova from './cordova';

import fontAwesomeCss from './styles/font-awesome/css/font-awesome.min.css';

import bootstrapCss from './styles/bootstrap/css/bootstrap.min.css';

import cssHelpers from './styles/helpers.css';
import css from './styles/main.css';

import bus from './services/bus-event';

Vue.use(VueResource);

Vue.use(VueAnalytics, {
    id: 'UA-40995702-4'
});

Vue.use(VueMoment);
require('./filters.js');

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.MAPS_API,
        libraries: 'places',
        installComponents: true
    }
});

window.store = store;

if (!window.cordova) {
    console.log('Not running in cordova');
    store.dispatch('init');
}

bus.on('system-ready', () => {
    let app = new Vue({
        el: '#app',
        router,
        store,
        template: '<App/>',
        components: { App }
    });
});
/* eslint-enable no-unused-vars */
