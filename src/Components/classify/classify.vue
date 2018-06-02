<template>
    <div class="loho_classify">
        <ul class="header">
            <li class="return"><router-link to="/"><i class="icon iconfont icon-back-line"></i></router-link></li>
            <li><router-link to="classify"><span>团购分类</span></router-link></li>
            <li class="showMenu"><i class="icon iconfont icon-list" @click="show"></i></li>
        </ul>
        <List v-show="this.data"></List>
        <div class="shopping">
            <ul class="shopping_1">
                <router-link to="/list"><li  v-for="item in goods" class="shopping_2">
                    <img :src="item.img">
                    <h3 class="name">{{item.title}}</h3>
                    <h4 class="price">
                        <span class="price1">优惠价￥{{item.price}}</span>
                        <span class="price2">￥{{item.price}}</span>
                    </h4>
                    <p class="addCar">点击下单购买</p>
                </li></router-link>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import "./classify.scss"
    import List from "../../component/showMenu/showMenu.vue"
    import http from '../../utils/httpclient'
    export default {
        data(){
            return {
                data: false,
                goods:[]
            }
        },
        methods : {
            show(){
                if(this.data == true){
                    this.data = false
                } else {
                    this.data = true
                }
            },
        },
        components: {
            List
        },
        mounted(){
            http.get("/getGoods",{field:"团购"}).then((res) => {
                this.goods = res.results
                console.log(this.goods);
            })
        },
    }
</script>