<template>
    <div class="loho_my">
        <my-header></my-header>
        <div>
          <img src="http://m.loho88.com/assets/images/login-banner.png" alt="">
        </div>
        <login></login>
        <div class="logo_forgot-pwd">
           <a  href="javascript:">忘记密码?</a>
        </div>
        <my-footer></my-footer>
    </div>
</template>


<script>
import myHeader from './my-header/my-header'
import Login from './login/login'
import myFooter from './my-footer/my-footer'
export default {
  components:{
    'my-header': myHeader,
    'login': Login,
    'my-footer': myFooter
  }
}
</script>

<style>
  .loho_my{
    /* height: 100%; */
    background: #ececec;
    padding: 50px 0px;
  }
  img{
    width: 100%;
  }
  .logo_forgot-pwd{
    padding-left: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
</style>


