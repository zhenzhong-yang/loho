<template>
    <div class="loho_list">
        <ul class="header">
            <li class="return"><router-link to="/"><i class="icon iconfont icon-back-line"></i></router-link></li>
            <li class="yx"><router-link to="list"><span>{{$route.params.field}}</span></router-link></li>
            <li class="return car"><router-link to="/shoppingcar"><i class="icon iconfont icon-qicheqianlian-" style="font-size:24px;"></i></router-link></li>
            <li class="showMenu"><i class="icon iconfont icon-list" @click="show"></i></li>
        </ul>
        <ul v-show="this.data" class="f-dropdown">
            <li><router-link to="/menber"><i class="icon iconfont icon-my"></i><span>会员中心</span></router-link></li>
            <li><router-link to="/"><i class="icon iconfont icon-shouye"></i><span>首页</span></router-link></li>
        </ul>
        <div class="shopping">
            <ul class="list">
                <li class="return">综合</li>
                <li class="yx" @click="paixu">销量</li>
                <li class="return car" @click="jiage">价格</li>
                <li class="showM">
                    <span>选择</span>
                    <i class="icon iconfont icon-safe tps"></i>
                </li>
            </ul>
            <ul class="shopping_1">
                <li  v-for="item in goods" class="shopping_2" :id="item.goodsId"><router-link :to="{name:'shoppingcar',params: {goodsId:item.goodsId}}">
                    <span class="isNew" v-if="item.isNew == 'true'">{{isNew}}</span>
                    <img :src="item.img">
                    <h3 class="name">{{item.title}}</h3>
                    <h4 class="price">
                        <span class="price1">￥{{item.price}}</span>
                    </h4>
                    <p class="salesNew">{{item.salesNum}}人购买</p></router-link>

                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import "./list.scss"
    import http from '../../utils/httpclient'
    export default {
        data(){
            return {
                data: false,
                goods:[],
                field:'',
                isNew:'New'
            }
        },
        methods : {
            show(){
            console.log(55)
                if(this.data == true){
                    this.data = false
                } else {
                    this.data = true
                }
            },
            paixu(){
                console.log(55)
                
            },
            jiage(){
                console.log(665)
                
            }
        },
        components: {
            
        },
        mounted(){
            console.log(this.field)
            http.get("/getGoods",{field:this.field}).then((res) => {
                this.goods = res.results
                console.log(this.goods);
            })

        },
        created(){
            console.log(this.$route);
            this.field = this.$route.params.field;
        }
    }
</script>

