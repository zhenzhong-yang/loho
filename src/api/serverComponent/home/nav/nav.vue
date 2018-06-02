<template>
    <nav class="menu-activea">
        <h1>Menu</h1>
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
        </ul>
    </nav>
</template>

<script>
    import './nav.scss'
    export default {
        mounted(){
            var nav = $('nav'),
              menu = $('nav h1'),
              main = $('main'),
              open = false,
              hover = false;

            menu.on('click', function() {
                  open = !open ? true : false;
              nav.toggleClass('menu-active');
              main.toggleClass('menu-active');
              nav.removeClass('menu-hover');
              main.removeClass('menu-hover');
              console.log(open);
              console.log(666)
            });
            menu.hover( 
              function() {
                if (!open) {
                  nav.addClass('menu-hover');
                  main.addClass('menu-hover');
                }
              }, function() {
                nav.removeClass('menu-hover');
                main.removeClass('menu-hover');
              }
            );
        }
    }
</script>