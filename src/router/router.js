import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomeComponent from "../Components/home/home.vue"
import ClassifyComponent from "../Components/classify/classify.vue"
import ExperienceComponent from "../Components/experience/experience.vue"
import MyComponent from "../Components/my/my.vue"
import RegisterComponent from "../Components/my/my-register/my-register"
import DetailPageComponent from "../Components/detail-page/detail-page"
import ShopingcarComponent from "../Components/shopping-car/shopping-car"
const router = new VueRouter({
    routes: [
        {path: '/', component: HomeComponent, name: 'home'},
        {path: "/classify", component: ClassifyComponent, name: "classify"},
        {path: "/experience", component: ExperienceComponent, name: "experience"},
        {path: "/my", component: MyComponent ,name: "my"},
        {path: "/register", component: RegisterComponent ,name: "register"},
        {path: "/detailpage", component: DetailPageComponent ,name: "detailpage"},
        {path: "/shoppingcar", component: ShopingcarComponent ,name: "shoppingcar"},
    ]
})

export default router;