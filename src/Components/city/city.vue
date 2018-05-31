<template>
    <div class="loho_city">
        <div class="loho_xuan">
            <div class="loho_back"><i class="icon iconfont icon-back-line" @click="back"></i></div>
            <div class="loho_xz"><span>选择城市</span></div>
            <div class="loho_menu">
                <ul>
                    <li><router-link to="/car"><i class="icon iconfont icon-qicheqianlian-"></i></router-link></li>
                    <li @click="show">
                        <i class="icon iconfont icon-list"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="loho_nav">
            <div class="loho_dang">
                <router-link to="/experience" style="display:block;width: 100%;height:100%;color:#3e3e3e;">
                    <i class="icon iconfont icon-location loho_i1"></i>
                    <span class="loho_sp1">当前城市：</span>
                    <span class="loho_sp2">{{city}}</span>
                    <i class="icon iconfont icon-chevronsmallright loho_i2"></i>
                </router-link>
            </div>
            <div class="loho_re">
                <p>热门城市</p>
                <p class="loho_pspan">
                    <span @click="path">北京</span>
                    <span @click="path">上海</span>
                    <span @click="path">广州</span>
                    <span @click="path">深圳</span>
                </p>
            </div>
            <div class="loho_citys">
                <p>全部城市</p>
                <ul>
                    <li v-for="(item,index) in cs">{{item.type}}</li>
                </ul>
            </div>
            <div class="loho_cs" v-for="(item,index) in cs">
                <p style="background:#f2f2f2;">{{item.type}}</p>
                <ul>
                    <li v-for="obj in item.city"><router-link to="/experience" style="color:#3e3e3e;">{{obj}}</router-link></li>
                </ul>
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

    import "./city.scss"

    export default {
        data(){
            return {
                isShow:false,
                city:"广州",
                cs:[{type:"A",city:["安庆"]},{type:"B",city:['北海','北京',"蚌埠"]},{type:"C",city:["长沙","常州","成都","郴州","重庆","沧州"]},{type:"D",city:["大连","大同","东莞"]},{type:"E",city:["鄂尔多斯"]},{type:"F",city:["佛山","阜阳","福州"]},{type:"G",city:["赣州","广州","贵阳"]},{type:"H",city:["海口","邯郸","杭州","合肥","衡阳","淮安","惠州"]},{type:"J",city:["江门","焦作","嘉兴","济南","金华","九江"]},{type:"K",city:["昆明"]},{type:"L",city:["廊坊","洛阳","泸州"]},{type:"M",city:["茂名"]},{type:"N",city:["南昌","南京","南宁","南通","南阳","宁波"]},{type:"P",city:["平顶山"]},{type:"Q",city:["青岛"]},{type:"S",city:["上海","上饶","韶关","沈阳","深圳","石家庄","苏州"]},{type:"T",city:["太原","泰州","天津","唐山"]},{type:"W",city:["渭南","武汉","芜湖","乌鲁木齐","无锡"]},{type:"X",city:["厦门","西安","湘潭"]},{type:"Y",city:["扬州"]},{type:"Z",city:["漳州","湛江","肇庆","郑州","中山","珠海","株洲"]}]
            }
        },
        methods:{
            show(){
                this.isShow = !this.isShow
            },
            back(){
                history.back();
            },
            path(){
                setTimeout(()=>{
                    this.$router.push({path:"/experience"})
                },300)
            }
        },
        mounted(){
            let city = window.localStorage.getItem('city');
            $(".loho_sp2").text(city)
            jQuery(function($){
                $(".loho_citys").on("click","li",function(){
                    let p = $(".loho_cs").children("p");
                    for(let i=0;i<p.length;i++){
                        if($(this).text() == p[i].innerText){
                            $("html,body").animate({scrollTop:$(p[i]).offset().top-60},1000)
                        }
                    }
                })

                $(".loho_pspan").on("click","span",function(){
                    $(".loho_sp2")[0].innerText = $(this).text();
                    window.localStorage.setItem('city',$(".loho_sp2")[0].innerText);
                })

                $(".loho_cs").on("click","li",function(){
                    $(".loho_sp2")[0].innerText = $(this).text()
                    window.localStorage.setItem('city',$(".loho_sp2")[0].innerText);
                })
            })
        }
    }
</script>