import './bootstrap';

import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
window.Alpine = Alpine;

Alpine.plugin(focus);

Alpine.start();

window.Vue = require('vue')

Vue.component('example-component',require('./components/ExampleComponents').default)
Vue.component('product-add',require('./components/products/ProductAdd').default)

const app = new Vue({
    el:'#app'
});

