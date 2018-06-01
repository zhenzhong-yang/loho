<template>
    <div class="loho_menber">
        <ul class="menber_header">
            <li class="menber_fh"><router-link to="/classify"><i class="icon iconfont icon-back-line tb1"></i></router-link></li>
            <li class="menber_hy"><router-link to="classify"><span>会员中心</span></router-link></li>
            <li class="menber_sy"><router-link to="/"><i class="icon iconfont icon-shouye tb2"></i></router-link></li>
            <li class="menber_sz"><router-link to="/center"><i class="icon iconfont icon-shezhi tb3"></i></router-link></li>
        </ul>
        <div class="menber_nav">
            <div class="nav_0">
                <ul class="menber_nav_0">
                    <li><img src="http://img.loho88.com/images/loho-m/index_logo.png" class="nav_img"></li>
                    <li class="user-name">{{this.data.username}}</li>
                </ul>
            </div>
            <div class="nav_1">
                <ul class="menber_nav_1">
                    <li><router-link to=""><i class="icon iconfont icon-icon-test"></i><span>待付款</span></router-link></li>
                    <li><router-link to=""><i class="icon iconfont icon-daishouhuo"></i><span>待收货</span></router-link></li>
                    <li><router-link to=""><i class="icon iconfont icon-pingjia"></i><span>全部评价</span></router-link></li>
                    <li><router-link to=""><i class="icon iconfont icon-dingdan"></i><span>全部订单</span></router-link></li>
                </ul>
            </div>
            <div class="nav_2">
                <ul class="menber_nav_2">
                    <li class="nav_2_1"><router-link to=""><i class="icon iconfont icon-circle-star"></i></router-link></li>
                    <li class="nav_2_2">
                        <router-link to="">
                            <span>我的现金卷</span>
                            <span>积分余额</span>
                        </router-link>
                    </li>
                    <li class="nav_2_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_3">
                <ul class="menber_nav_3">
                    <li class="nav_3_1"><router-link to=""><i class="icon iconfont icon-circle-star"></i></router-link></li>
                    <li class="nav_3_2"><router-link to=""><span>个人资料</span></router-link></li>
                    <li class="nav_3_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_4">
                <ul class="menber_nav_4">
                    <li class="nav_4_1"><router-link to=""><i class="icon iconfont icon-circle-star"></i></router-link></li>
                    <li class="nav_4_2"><router-link to=""><span>我的团购</span></router-link></li>
                    <li class="nav_4_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_5">
                <ul class="menber_nav_5">
                    <li class="nav_5_1"><router-link to=""><i class="icon iconfont icon-circle-star"></i></router-link></li>
                    <li class="nav_5_2"><router-link to=""><span>我的收藏</span></router-link></li>
                    <li class="nav_5_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_6">
                <ul class="menber_nav_6">
                    <li class="nav_6_1"><router-link to=""><i class="icon iconfont icon-lambda_ic_eye"></i></router-link></li>
                    <li class="nav_6_2"><router-link to=""><span>我的验光单</span></router-link></li>
                    <li class="nav_6_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_7">
                <ul class="menber_nav_7">
                    <li class="nav_7_1"><router-link to=""><i class="icon iconfont icon-brand"></i></router-link></li>
                    <router-link to="/addr"><li class="nav_7_2"><span>收货地址</span></li></router-link>
                    <li class="nav_7_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
            <div class="nav_8">
                <ul class="menber_nav_8">
                    <li class="nav_8_1"><router-link to=""><i class="icon iconfont icon-suo"></i></router-link></li>
                    <li class="nav_8_2"><router-link to=""><span>密码管理</span></router-link></li>
                    <li class="nav_8_3"><router-link to=""><i class="icon iconfont icon-chevronsmallright"></i></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import "./menber.scss"
    import http from '../../utils/httpclient.js'
    export default {
        data() {
            return{
                data:{
                    username:'18877121121'
                }
            }
        },
        

    }

</script>