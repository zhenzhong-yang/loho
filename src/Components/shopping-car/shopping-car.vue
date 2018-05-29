<template>
    <section class="loho_shop-car">
        <header class="logo_shop-header-wrapper">
            <div class="loho_shop-header">
                <i class="icon-back-line"></i>
                <span class="icon-qicheqianlian">购物车</span>
                <i class="icon-tipicoorder"></i>
            </div>
            <div>

            </div>
        </header>
        <section class="loho_car-tologin">
            <p>登录后可同步电脑与手机购物车中的商品</p>
            <span>
                登录
            </span>
        </section>

        <section class="loho_car-content">
            <div class="loho_shopping-tips">
            <div class="car-wrapper icon-qicheqianlian">
            </div>
            <p>您的购物车尚未添加商品</p>
            <p>去<a class="fc-link" href="http://www.loho88.com/">
                Loho88眼镜生活
                </a> 购买商品！
            </p>
            </div>
        </section>

        <div class="loho_login-frame">
            <div class="login-frame-wrapper">
                <p>登录 <span>×</span></p>
                <div class="loho_login-form">
                    <input type="text" placeholder="手机号">
                </div>
                <div class="loho_login-form hasend">
                    <input type="text" placeholder="请输入图形验证码">
                    <span>
                        <img src="http://m.loho88.com/code/getCaptchaCode.do?0.731252829" />
                    </span>
                </div>
                <div class="loho_login-form hasend">
                    <input type="text" placeholder="请输入短信验证码">
                    <span> <a href="javascript:">发送验证码</a> </span>
                </div>
                <div class="loho_login-form login-btn">
                    <button>登录</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loho_shop-car {
  padding-top: 50px;
  background: rgb(247, 247, 247);
  height: 100%;
}
.logo_shop-header-wrapper {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  .loho_shop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: #000;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    i::before {
      font-weight: 600;
      font-size: 20px;
    }
    span {
      &::before {
        font-size: 20px;
        margin-right: 5px;
        font-weight: 600;
      }
    }
  }
}

.loho_car-tologin {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 10px;
  font-size: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  background: rgb(249, 249, 249);
  p {
    text-align: center;
    width: 80%;
    font-size: 12px;
  }
  span {
    border-radius: 3px;
    padding: 4px 12px;
    background: #f15353;
  }
}
.loho_car-content {
  padding: 15px;

  .loho_shopping-tips {
    margin: 25px 0;
    padding: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    .car-wrapper {
      &::before {
        font-size: 40px;
        font-weight: 600;
      }
    }
    p {
      font-size: 14px;
      a {
        color: #06a;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

.loho_login-frame{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.85;
    z-index: 100;
    .login-frame-wrapper{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        padding: 3px 20px;
        opacity: 1;
        p{
            position: relative;
            font-size: 18px;
            line-height: 30px;
            color: #06f;
            text-align: center;
            margin-bottom: 10px;
            span{
                position: absolute;
                right: -8px;
                top: 0;
                width: 30px;
                height: 30px;
                font-size: 40px;
                color: #aaa;
                text-align: center;
                line-height: 30px;
            }
        }
        .loho_login-form{
            height: 44px;
            margin-bottom: 10px;
            border: 1px solid #d7d7d7;
            border-radius: 3px;
            background-color: #fff !important;
            font-size: 16px;
            color: #252525;
            -webkit-appearance: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                height: 100%;
                flex: 1;
                border: none;
                padding-left: 10px;
                font-size: 16px;
                color: #252525;
                background: #fff;
            }
            
        }
        .hasend{
            input{
                width: 80%;
            }
            span{
                width: 90px;
                line-height: 30px;
                border-radius: 5px;
                display: block;
                margin: 8px 5px;
                text-align: center;
                overflow: hidden;
                background: #f15353;
                img{
                    width: 90px; 
                    max-width: 100%;
                }
                a{
                    font-size: 12px;
                    color: white;
                }
            }
        }
        .login-btn button{
            cursor: pointer;
            width: 100%;
            height: 44px;
            line-height: 44px;
            background-color: #d02;
            color: #fff;
            text-align: center;
            font-size: 20px;
            border-radius: 3px;
            border: 0;
        }
    }
}
</style>
