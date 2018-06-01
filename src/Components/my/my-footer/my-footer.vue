<template>
  <footer class="loho_footer">
    <!-- <div class="loho_my-footer">
      <a class="login-normal" href="javascript:">注册</a>
      <a class="login-unactive" href="javascript:">登录</a>
    </div> -->
    <div class="logo_login_btn ">
      <a class="" href="javascript;">完成注册</a>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.logo_login_btn{
  display: flex;
  height: 50px;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgb(212, 212, 212);
    color: rgba(0, 0, 0, 0.75);
    &.active{
      background: #e8343b;
      color: white;
    }
  }
}
.loho_footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.loho_my-footer{
  display: flex;
  
  background: white;
  height: 50px;
  a{
    // background: #e8343b;
    
    flex:1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.login-active{
      background: #e8343b;
      color: white;
    }
    &.login-unactive{
      background: rgb(184, 184, 184);
      color: rgba(0, 0, 0, 0.75);
    }
  }

}
</style>
