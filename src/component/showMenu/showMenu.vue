<template>
    <div class="loho_showMenu">
        <ul class="showmenu_header">
            <li><router-link to="/"><i class="icon iconfont icon-shouye"></i><span>首页</span></router-link></li>
            <li><router-link to="menber"><i class="icon iconfont icon-people"></i><span>会员中心</span></router-link></li>
            <li><router-link to="shoppingcar"><i class="icon iconfont icon-qicheqianlian-"></i><span>购物车</span></router-link></li>
            <li><router-link to="/chatbox"><i class="icon iconfont icon-dingwei"></i><span>在线咨询</span></router-link></li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import "./showMenu.scss"
    export default {
        
    }
</script>