<template>
    <header>
        <h1>
            后台管理系统
        </h1>
        <div class="j_hy">
            欢迎您：
            <i class="icon iconfont icon-wode2"></i>
            <span>laoyang</span>
        </div>
        <div class="j_zw">
            <i class="icon iconfont icon-qiehuan"></i>
            <span>中文</span>
        </div>
        <div class="j_tc">
            <i class="icon iconfont icon-tuichu"></i>
            <span @click="logout">退出</span>
        </div>  
    </header>
</template>

<script>
    import './header.scss'
    import router from '../../../../router/router.js'
    export default {
        data(){
            return{
                showLogin:true
            }
        },
        methods:{
            logout(){
                localStorage.removeItem("token" )
                router.push("/admin");
            }
        }
    }
</script>