import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomeComponent from "../Components/home/home.vue"
import ClassifyComponent from "../Components/classify/classify.vue"
import ExperienceComponent from "../Components/experience/experience.vue"
import MyComponent from "../Components/my/my.vue"
import CityComponent from "../Components/city/city.vue"


import ShowMenuComponent from "../component/showMenu/showMenu.vue"
import ChatboxComponent from "../component/chatbox/chatbox.vue"
import MenberComponent from "../component/menber/menber.vue"
import CenterComponent from "../component/center/center.vue"
import AddrComponent from "../component/addr/addr.vue"

import RegisterComponent from "../Components/my/my-register/my-register"
import DetailPageComponent from "../Components/detail-page/detail-page"
import ShopingcarComponent from "../Components/shopping-car/shopping-car"
import serverLoginComponent from "../api/serverComponent/login/login.vue"
import serverHomeComponent from "../api/serverComponent/home/home.vue"
import serverUserComponent from "../api/serverComponent/user/user.vue"
import serverGoodsComponent from "../api/serverComponent/goods/goods.vue"
const router = new VueRouter({
    routes: [
        {path: '/', component: HomeComponent, name: 'home'},
        {path:"/city",component:CityComponent,name:"city"},
        {path: "/classify", component: ClassifyComponent, name: "classify"},
        {path: "/experience", component: ExperienceComponent, name: "experience"},
        {path: "/my", component: MyComponent ,name: "my"},

        
        {path: "/showMenu", component: ShowMenuComponent ,name: "showMenu"},
        {path: "/chatbox", component: ChatboxComponent ,name: "chatbox"},
        {path: "/menber", component: MenberComponent ,name: "menber"},
        {path: "/center", component: CenterComponent ,name: "center"},
        {path: "/addr", component: AddrComponent ,name: "addr"},

        {path: "/register", component: RegisterComponent ,name: "register"},
        {path: "/detailpage", component: DetailPageComponent ,name: "detailpage"},
        {path: "/shoppingcar", component: ShopingcarComponent ,name: "shoppingcar"},
        {path: "/admin", component: serverLoginComponent, name:"admin"},
        {path: "/server", component: serverHomeComponent, name:"server",children:[
            {path: "user", component:serverUserComponent, name:"serverUser"},
            {path: "goods", component:serverGoodsComponent, name:"serverGoods"}
        ]},

    ]
})

export default router;