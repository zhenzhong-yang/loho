<template>
    <div class="j_nav">
        <ul>
            <router-link to="/server/user">
                <li>
                    <i class="icon iconfont icon-yonghuguanli"></i>
                    用户管理
                </li>
            </router-link>
            <router-link to="/server/goods">
                <li>
                    <i class="icon iconfont icon-guanli"></i>
                    商品管理
                </li>
            </router-link>
<!--             <router-link to="order">
                <li>
                    <i class="icon iconfont icon-weibiaoti3"></i>
                    订单管理
                </li>
            </router-link>
             <router-link to="other">
                <li>
                    <i class="icon iconfont icon-qita"></i>
                    其他设置
                </li>
            </router-link> -->
        </ul>

    </div>
</template>

<script>
    import './nav.scss'
    export default {}
</script>