<template>
<div>
  <ul class="loho_login-mode">
    <li>
      <a href="javascript:">
        手机号码快速登录
      </a>
    </li>
    <li class="loho_active">
      <a class="loho_active" href="javascript:">
        帐号密码登录
      </a>
    </li>
  </ul>
  <div>
    <account-login></account-login>
  </div>
</div>
  
</template>

<script>
import AccountLogin from '../account-login/account-login'
export default {
  components:{
    'account-login':AccountLogin
  }
}
</script>

<style lang="scss">
.loho_login-mode{
  display: flex;
  background: white;
  li{
    flex: 1;
    color: rgb(51, 51, 51);
    position: relative;
    a{
      text-align: center;
      display: block;
      line-height: 1.4;
      padding: 10px;
      
    }
    a.loho_active{
      color: #e8343b;
    }
    &.loho_active::before{
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1.5px;
      width: 100%;
      background: #e8343b;
    }
   
  }
}
</style>
