import Vue from 'vue';

import router from './router/router.js'

import appComponent from './App.vue'

// import store from "./vuex/store"

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(appComponent)
})