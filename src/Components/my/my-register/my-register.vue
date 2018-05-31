<template>
  <section class="loho_register">
    <my-header></my-header>
  <div class="loho_account">
    <div class="loho_account_register">
      <i >手机号</i>
      <input type="text" placeholder="请输入帐号名">
    </div>
    <div class="loho_account_register hasend">  
      <i>图形验证码</i>
      <input type="text" placeholder="请输入验证码">
      <em>5463</em>
    </div>
    <div class="loho_account_register hasend">
      <i>验证码</i>
      <input type="text" placeholder="请输入短信验证码">
      <a href="javascript:">发送验证码</a>
    </div>
    <div class="loho_account_register">
      <i>密码</i>
      <input type="text" placeholder="请输入6-20位数字/字母/符号">
    </div>
    <div class="loho_account_register">
      <i>确认密码</i>
      <input type="text" placeholder="请确认密码">
    </div>
  </div>
  <p class="licence">完成注册表示您已看过并接受<a href="javascript:">《LOHO用户协议》</a></p>
  <my-footer></my-footer>
  </section>
</template>

<script>
import myHeader from "../my-header/my-header";
import myFooter from '../my-footer/my-footer';
export default {
  components: {
    'my-header': myHeader,
    'my-footer': myFooter
  }
};
</script>

<style lang="scss">
.loho_register{
  background: rgb(236, 236, 236);
  height: 100%;
  padding-top: 50px;
  .licence{
    position: fixed;
    bottom :70px;
    font-size: 12px;
    width: 100%;
    text-align: center;
    a{
        color: #e8343b;
    }
  }
}
.loho_account {
  margin-top: 10px;
  background: white;
  border-bottom: 1px solid rgb(202, 202, 202);
  .loho_account_register {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    &:last-child {
      input{
        border-bottom: none;
      }
    }
    i {
      // display: block;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      width: 30%;
      text-align: center;
      font-size: 14px;
    }
    input {
      height: 100%;
      width: 70%;
      border: none;
      border-bottom: 1px solid rgb(196, 196, 196);
      padding: 5px 0px;
      flex:1;
    }
    &.hasend{
        input{
          width: 40%;
        }
    }
    em {
      background: rgb(153, 153, 153);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
    }
    a {
      font-size: 14px;
      width: 30%;
      height: 100%;
      background: #e8343b;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
