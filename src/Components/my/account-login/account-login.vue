<template>
  <section>
    
  <div class="loho_account">
    <div class="loho_account_loginsize">
      <i class="icon-people"></i>
      <input type="text" placeholder="请输入帐号名">
    </div>
    <div class="loho_account_loginsize">
      <i class="icon-lock"></i>
      <input type="text" placeholder="请输入密码">
    </div>
    <div class="loho_account_loginsize">
      <i class="icon-safe"></i>
      <input type="text" placeholder="请输入验证码">
      <em>5463</em>
    </div>
  </div>
  <div class="loho_account">
    <div class="loho_account_loginsize">
      <i class="icon-people"></i>
      <input type="text" placeholder="请输入帐号名">
    </div>
    
    <div class="loho_account_loginsize">
      <i class="icon-safe"></i>
      <input type="text" placeholder="请输入验证码">
      <em>5463</em>
    </div>
    <div class="loho_account_loginsize">
      <i class="icon-tipicoorder"></i>
      <input type="text" placeholder="请输入短信验证码">
      <a href="javascript:">发送验证码</a>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.loho_account{
  margin-top: 10px;
  background: white;
  padding-left: 15px;
  border-bottom: 1px solid rgb(202, 202, 202);
  .loho_account_loginsize{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgb(202, 202, 202);
    height: 40px;
    &:last-child{
      border-bottom:none;
    }
    i{
      width: 10%;
      text-align: center;
      &::before{
        font-size: 18px;
      }
    }
    input{
      height: 100%;
      flex:1;
      border: none;
      padding: 5px 10px;
    }
    em{
      width: 30%;
      background: rgb(153, 153, 153);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a{
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
