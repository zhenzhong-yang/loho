<template>
    <div class="loho_home" style="height:100%;">
        <div class="loho_head">
            <router-link to="/city" style="color:#3e3e3e;">
                <div class="loho_site">
                    <span class="loho_si">{{site}}</span>
                    <i class="icon iconfont icon-unfold"></i>
                </div>
            </router-link>
            <div class="loho_logo">LOHO</div>
            <div class="loho_menu">
                <ul>
                    <li><router-link to="/car"><i class="icon iconfont icon-qicheqianlian-"></i></router-link></li>
                    <li><router-link to="/login"><i class="icon iconfont icon-my"></i></router-link></li>
                </ul>
            </div>
        </div>
        <div class="loho_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="http://img.loho88.com/images/2018/官网促销/5y750x375.jpg"/>
                    </div>
                    <div class="swiper-slide"><img src="http://img.loho88.com/images/2018/2018rxtyj.jpg" /></div>
                    <div class="swiper-slide"><img src="http://img.loho88.com/images/2018/tgsjd.jpg" /></div>
                    <div class="swiper-slide"><img src="http://img.loho88.com/images/2018/xszg.jpg" /></div>
                    <div class="swiper-slide"><img src="http://img.loho88.com/images/2018/jmzty.jpg" /></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="loho_eyes">
                <ul>
                    <li><router-link :to="{name:'list',params:{field:'新品上市'}}"><img src="http://img.loho88.com/images/loho-m/xpss.png" alt="" /><span>新品上市</span></router-link></li>
                    <li><router-link :to="{name:'list',params:{field:'光学眼镜'}}"><img src="http://img.loho88.com/images/loho-m/gxyj.png" alt="" /><span>光学眼镜</span></router-link></li>
                    <li><router-link :to="{name:'list',params:{field:'太阳眼镜'}}"><img src="http://img.loho88.com/images/loho-m/tyyj.png" alt="" /><span>太阳眼镜</span></router-link></li>
                    <li><router-link :to="{name:'list',params:{field:'儿童眼镜'}}"><img src="http://img.loho88.com/images/loho-m/etyj.png" alt="" /><span>儿童眼镜</span></router-link></li>
                    <li><router-link :to="{name:'list',params:{field:'品牌镜片'}}"><img src="http://img.loho88.com/images/loho-m/ppjp.png" alt="" /><span>品牌镜片</span></router-link></li>
                    <li><router-link :to="{name:'list',params:{field:'功能眼镜'}}"><img src="http://img.loho88.com/images/loho-m/gnyj.png" alt="" /><span>功能眼镜</span></router-link></li>
                    <li><router-link  :to="{name:'list',params:{field:'隐形眼镜'}}"><img src="http://img.loho88.com/images/loho-m/mtyx.png" alt="" /><span>隐形眼镜</span></router-link></li>
                    <li><router-link to="/experience"><img src="http://img.loho88.com/images/loho-m/cztyd.png" alt="" /><span>查找体验店</span></router-link></li>
                </ul>
            </div>
            <div class="loho_ping">
                <img data-original="http://img.loho88.com/images/2018/ppjs.jpg" class="lazy" />
            </div>
            <div class="loho_tui">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">人气推荐</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>                
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/07-1.jpg" class="lazy" />
                <ul>
                    <li>
                        <p>时尚潮流</p>
                        <p>Fashion trend</p>
                        <p><img data-original="http://img.loho88.com/images/2018/newdir/LH08004-C1.jpg" class="lazy" /></p>
                    </li>
                    <li style="border-right:none">
                        <p>时尚圆框</p>
                        <p>Simplicity square frame</p>
                        <p><img data-original="http://img.loho88.com/images/2018/newdir/LH01022-C01.jpg" class="lazy" /></p>
                    </li>
                    <li>
                        <p>舒适感受</p>
                        <p>Comfortable fitting </p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH06005-C03.jpg" class="lazy" /></p>
                    </li>
                    <li style="border-right:none">
                        <p>文艺风尚</p>
                        <p>Literary style</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH02010-C01.jpg" class="lazy"/></p>
                    </li>
                    <li>
                        <p>别致风格</p>
                        <p>Chic style</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH02603-C1.jpg" class="lazy" /></p>
                    </li>
                    <li style="border-right:none">
                        <p>与众不同</p>
                        <p>Different</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH3005.jpg" class="lazy" /></p>
                    </li>
                </ul>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">新品上市</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/08-1.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">经典永恒</p>
                        <p class="loho_l2" style="color:#c1c1c1">Classic forever</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH08603-C03.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>清新有型</p>
                            <p style="color:#c1c1c1">Pure and fresh and stylish</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH08014-C06.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>潮流风尚</p>
                            <p style="color:#c1c1c1">Trend of fashion</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH07022-C06.jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">太阳镜</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/05-1.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">魅力有型</p>
                        <p class="loho_l2" style="color:#c1c1c1">Charm has a type</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH04605-C01.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>轻盈时尚</p>
                            <p style="color:#c1c1c1">Lightsome style</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH7002-C3.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>独特品质</p>
                            <p style="color:#c1c1c1">Unique qualities</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH00604-C3.jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">碳纤维眼镜</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/06-1.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">轻盈舒适</p>
                        <p class="loho_l2" style="color:#c1c1c1">Light and comfortable</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH08007-C2.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>轻盈时尚</p>
                            <p style="color:#c1c1c1">Lightsome style</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH08009-C9.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>配戴有型</p>
                            <p style="color:#c1c1c1">Wearing a stylish</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/GX9035-C2.jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">板材眼镜</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/02-1.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">新潮时尚</p>
                        <p class="loho_l2" style="color:#c1c1c1">Trendy fashion</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH08011-C6.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>文艺方框</p>
                            <p style="color:#c1c1c1">The box of literature and art</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH07018-C06.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>成熟大方</p>
                            <p style="color:#c1c1c1">Ripe and generous</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH06009-C1.jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">钛线眼镜</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/04-1.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">经典方框</p>
                        <p class="loho_l2" style="color:#c1c1c1">Classic box</p>
                        <p><img data-original="http://img.loho88.com/images/2018/yddcp/DS011-C1.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>商务镜框</p>
                            <p style="color:#c1c1c1">Business frame</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/DS020-C1.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>超轻材质</p>
                            <p style="color:#c1c1c1"> 6/5000  Lightweight material</p>
                            <p><img data-original="http://img.loho88.com/images/2018/yddcp/LH01006-C3.jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">功能眼镜</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/shoujiao/8gn.jpg" class="lazy" />
                <div class="loho_n">
                    <div class="loho_left">
                        <p class="loho_l1">防眩光反光</p>
                        <p class="loho_l2" style="color:#c1c1c1">Anti-glare reflex</p>
                        <p><img data-original="http://img.loho88.com/images/loho-m/newdir/QXJ002-C1.jpg" class="lazy" /></p>
                    </div>
                    <ul>
                        <li>
                            <p>夜视清晰</p>
                            <p style="color:#c1c1c1">Night vision is clear</p>
                            <p><img data-original="http://img.loho88.com/images/loho-m/newdir/QXJ002-C2.jpg" class="lazy" /></p>
                        </li>
                        <li>
                            <p>可配近视</p>
                            <p style="color:#c1c1c1">With myopia</p>
                            <p><img data-original="http://img.loho88.com/images/loho-m/newdir/QXJ003-C1(1).jpg" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_new loho_yin">
                <div class="loho_ren">
                    <h2>
                        <i class="loho_i1"></i>
                        <span class="loho_sp1">隐形美瞳</span>
                        <span class="loho_sp2">更多</span>
                        <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                    </h2>
                </div>
                <img data-original="http://img.loho88.com/images/loho-m/guanggaowei2/01-1.jpg " class="lazy" />
                <div class="loho_mei">
                    <ul>
                        <li style="border-right:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;">
                            <p>巧克力色彩，甜美可人</p>
                            <p>Sweet choco color</p>
                            <p><img data-original="http://img.loho88.com/images/16jiheye_yx/kerchoco1.png" class="lazy"/></p>
                        </li>
                        <li style="border-bottom:1px solid #e1e1e1;">
                            <p>深邃褐色，自然增亮</p>
                            <p>Vast brown</p>
                            <p><img data-original="http://img.loho88.com/images/16jiheye_yx/sdl_1m1.png" class="lazy" /></p>
                        </li>
                        <li style="border-right:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;">
                            <p>精致花纹，性感诱人</p>
                            <p>Tortie brown</p>
                            <p><img data-original="http://img.loho88.com/images/16jiheye_yx/fsk1.png" class="lazy" /></p>
                        </li>
                        <li style="border-bottom:1px solid #e1e1e1;">
                            <p>大美目系列</p>
                            <p>Winsome brown</p>
                            <p><img data-original="http://img.loho88.com/images/16jiheye_yx/fsk-1day1.png" class="lazy" /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loho_like">
                <span>你可能喜欢</span>
                <i class="icon iconfont icon-unfold"></i>
            </div>
            <div class="loho_jia">
                <ul>
                    <li style="border-right:1px solid #c1c1c1;">
                        <p><img src="http://image.loho88.com/images/201312/thumb_img/1465_thumb_G_1388276839308.jpg" class="lazy"/></p>
                        <p>轻装上镜LH6005 板材+金属 男款 黑色 玳瑁色 黄色</p>
                        <p>¥ 399</p>
                    </li>
                    <li>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                </ul>
                <p class="loho_p">{{dian}}</p>
            </div>
            <div class="loho_ti">
                <ul>
                    <li class="loho_tii1">
                        <p style="border-right:1px solid #000;" class="loho_p2"><i class="icon iconfont icon-location"></i><span>欢迎到体验店试戴</span></p>
                        <p class="loho_p1"><i class="icon iconfont icon-dianhua"></i><span class="loho_tisp1">预约热线：400-887-1920</span><br /><span class="loho_tisp2">（服务时间 9:00 - 23:00）</span></p>
                    </li>
                    <li class="loho_tii2">
                        <p>LOHO</p>
                        <p>STYLE UP</p>
                    </li>
                    <li class="loho_tii3">
                        <p>ICP备案证书号：粤ICP备11106081</p>
                        <p>©2005-2018 深圳市乐活电子商务有限公司-时尚眼镜品牌 版权所有，并保留所有权利</p>
                        <p>公司地址：深圳市福田区彩田路彩虹新都彩虹大厦29B</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="loho_fan">
            <i class="icon iconfont icon-IconChevronUp"></i>
        </div>
        <CommonalityComponent />
    </div>
</template>
<script type="text/javascript">
    import CommonalityComponent from "../commonality/commonality.vue" 
    import Swiper from 'swiper'
    import "swiper/dist/css/swiper.min.css"
    import "./home.scss"

    export default {
        data(){
            return {
                site:"广州",
                dian:"点击加载更多...",
                isShow:true
            }
        },
        components:{
            CommonalityComponent
        },
        methods:{
            toggle(){
                this.isShow = !this.isShow;
            }
        },
        mounted(){
            let city = window.localStorage.getItem('city');
            // console.log(city)
            $(".loho_si").text(city)
            var mySwiper = new Swiper ('.swiper-container', {
                centeredSlides: true,
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })

            jQuery(function($){
                $("img.lazy").lazyload({effect: "slideDown",placeholder : ""});
                // $("img.lazy").lazyload({
                //     placeholder : "", //用图片提前占位
                //     // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
                //     effect: "slideDown", // 载入使用何种效果
                //     // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
                //     threshold: 200, // 提前开始加载
                //     // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
                //     event: 'scroll',  // 事件触发时才加载
                //     // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
                //     container: $(".loho_nav"),  // 对某容器中的图片实现效果
                //     // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
                //     failurelimit : 10 // 图片排序混乱时
                //     // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
                // });

                $(".loho_p").on("click",function(){
                    $(this).text("已经到底部了").prev("ul").css({display:"block"}).children("li").css({height:"3.333333rem",float:"left"})
                })

                $(".loho_like").on("click",function(){
                    $(".loho_jia").slideToggle()
                })

                $(window).scroll(function(){
                    if(window.scrollY >= 50){
                        $(".loho_fan").css({display:"block"})
                    }else if(window.scrollY < 50){
                        $(".loho_fan").css({display:"none"})
                    }
                })

                $(".loho_fan").on("click",function(){
                    window.scrollTo(0,0)
                })
            })
        }
    }

</script>