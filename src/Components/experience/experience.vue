<template>
    <div class="loho_experience">
        <div class="loho_xuan">
            <div class="loho_back"><i class="icon iconfont icon-back-line" @click="back"></i></div>
            <div class="loho_xz"><span>查找体验店</span></div>
            <div class="loho_menu">
                <ul>
                    <li><router-link to="/car"><i class="icon iconfont icon-qicheqianlian-"></i></router-link></li>
                    <li @click="show">
                        <i class="icon iconfont icon-list"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="loho_dian">
            <ul>
                <li>
                    <span>列表</span>
                </li>
                <li>
                    <span style="border-right:none;">地图</span>
                </li>
            </ul>
            <div class="loho_lie">
                <router-link to="/city" style="color:#3e3e3e;"> 
                    <div class="loho_tiyan">
                        <p style="float:left;">
                            <span class="loho_ci"></span><span>共26家体验店( 全国<i style="color:red;">304</i>家 )</span>
                        </p>
                        <p style="float:right;"><span class="loho_ci" style="margin-right:0.106667rem;"></span><i class="icon iconfont icon-chevronsmallright"></i></p>
                    </div>
                </router-link>
                <div class="loho_dianpu">
                    <div class="loho_dp">
                        <h2 class="loho_h2"><span>中华广场店</span><i class="iconfont icon-xiangshangjiantou"></i></h2>
                    </div>
                </div>
                <div class="loho_din">
                    <p><i class="icon iconfont icon-location"></i> <span>1.88km</span></p>
                    <div class="loho_img"><img src="http://image.loho88.com/images/shop/31201/1519803897302309.jpg" alt="" /></div>
                    <p class="loho_dizhi">地址：广州市越秀区中山3路33号中华广场首层1014号铺</p>
                    <div class="loho_yu">
                        <button>免费预约直营店验光</button>
                        <i class="icon iconfont icon-dianhua"></i>
                    </div>
                </div>
                <div class="loho_dianpu">
                    <div class="loho_dp">
                        <h2 class="loho_h2"><span>中华广场店</span><i class="iconfont icon-xiangshangjiantou"></i></h2>
                    </div>
                </div>
                <div class="loho_din">
                    <p><i class="icon iconfont icon-location"></i> <span>1.88km</span></p>
                    <div class="loho_img"><img src="http://image.loho88.com/images/shop/31201/1519803897302309.jpg" alt="" /></div>
                    <p class="loho_dizhi">地址：广州市越秀区中山3路33号中华广场首层1014号铺</p>
                    <div class="loho_yu">
                        <button>免费预约直营店验光</button>
                        <i class="icon iconfont icon-dianhua"></i>
                    </div>
                </div>
                <div class="loho_dianpu">
                    <div class="loho_dp">
                        <h2 class="loho_h2"><span>中华广场店</span><i class="iconfont icon-xiangshangjiantou"></i></h2>
                    </div>
                </div>
                <div class="loho_din">
                    <p><i class="icon iconfont icon-location"></i> <span>1.88km</span></p>
                    <div class="loho_img"><img src="http://image.loho88.com/images/shop/31201/1519803897302309.jpg" alt="" /></div>
                    <p class="loho_dizhi">地址：广州市越秀区中山3路33号中华广场首层1014号铺</p>
                    <div class="loho_yu">
                        <button>免费预约直营店验光</button>
                        <i class="icon iconfont icon-dianhua"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="loho_list" v-show="isShow">
            <ul>
                <router-link to="/my"><li><i class="icon iconfont icon-my"></i><span>会员中心</span></li></router-link>
                <router-link to="/"><li><i class="icon iconfont icon-shouye"></i><span>首页</span></li></router-link>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import "./experience.scss"

    export default {
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            show(){
                this.isShow = !this.isShow
            },
            back(){
                history.back();
            }
        },
        mounted(){
            let city = window.localStorage.getItem('city');

            jQuery(function($){
                $(".loho_ci").text(city);
                $(".loho_lie").on("click",".loho_h2",function(){
                    $(this).css({display:"none"})
                })
            })
        }
    }
</script>