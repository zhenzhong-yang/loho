import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from "../Components/home/home.vue"
import ClassifyComponent from "../Components/classify/classify.vue"
import ExperienceComponent from "../Components/experience/experience.vue"
import MyComponent from "../Components/my/my.vue"

import ShowMenuComponent from "../component/showMenu/showMenu.vue"
import ChatboxComponent from "../component/chatbox/chatbox.vue"
import MenberComponent from "../component/menber/menber.vue"
import CenterComponent from "../component/center/center.vue"
import AddrComponent from "../component/addr/addr.vue"

const router = new VueRouter({
    routes: [
        {path: '/', component: HomeComponent, name: 'home'},
        {path: "/classify", component: ClassifyComponent, name: "classify"},
        {path: "/experience", component: ExperienceComponent, name: "experience"},
        {path: "/my", component: MyComponent ,name: "my"},
        
        {path: "/showMenu", component: ShowMenuComponent ,name: "showMenu"},
        {path: "/chatbox", component: ChatboxComponent ,name: "chatbox"},
        {path: "/menber", component: MenberComponent ,name: "menber"},
        {path: "/center", component: CenterComponent ,name: "center"},
        {path: "/addr", component: AddrComponent ,name: "addr"},
    ]
})

export default router;