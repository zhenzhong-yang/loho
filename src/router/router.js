import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from "../Components/home/home.vue"
import ClassifyComponent from "../Components/classify/classify.vue"
import ExperienceComponent from "../Components/experience/experience.vue"
import MyComponent from "../Components/my/my.vue"

const router = new VueRouter({
    routes: [
        {path: '/', component: HomeComponent, name: 'home'},
        {path: "/classify", component: ClassifyComponent, name: "classify"},
        {path: "/experience", component: ExperienceComponent, name: "experience"},
        {path: "/my", component: MyComponent ,name: "my"}
    ]
})

export default router;