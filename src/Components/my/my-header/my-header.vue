<template>
  <div class="loho_header">
    <a class="icon-back-line" href="javascript:"></a>
    <h1>登录</h1>
    <div class="loho_header-right">
      <i class="icon-qicheqianlian"></i>
      <i class="icon-list"></i>
    </div>
  </div>
</template>

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
    i:nth-child(1)::before{
      font-size: 1.5em;
    }
    i{
      padding: 5px;
    }
  }
}
</style>
