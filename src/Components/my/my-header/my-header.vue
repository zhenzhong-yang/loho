<template>
  <div class="loho_header">
    <a class="icon-back-line" href="javascript:"></a>
    <h1>登录</h1>
    <div class="loho_header-right">
      <router-link to="/shoppingcar" class="icon-qicheqianlian"></router-link>
      <i  @click="()=>{showmenu = !showmenu}" class="icon-list"></i>
      <ul v-if="showmenu" class="loho_show-menu">
      <li><router-link to="/" > <i class="icon-people"></i> <span>会员中心</span> </router-link></li>
      <li><router-link to="/" > <i class="icon-shouye"></i> <span>首页</span> </router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showmenu:false
    }
  }
}
</script>


<style lang='scss'>

.loho_header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: white;
  z-index: 100;
  a::before {
    color: rgb(51, 51, 51);
    font-size: 1.5em;
  }
  h1{
    font-style: normal;
    font-weight: normal;
    padding-left: 0.3906rem;
    font-size: 14px;
    line-height: 1.4;
  }
  .loho_header-right{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    position: relative;
    i:nth-child(1)::before{
      font-size: 1.5em;
    }
    i{
      padding: 5px;
    }
    .loho_show-menu{
      position: absolute;
      background: #fff;
      border: 1px solid #eee;
      top: 35px;
      right: 0px;
      width: 136px;
      z-index: 50;
      // height: 6px;
      a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 10px;
        span{
          flex:1;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
