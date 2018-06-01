<template>
  <section class="loho_detail-page">
    <my-header></my-header>
    <div class="loho_detail-banner swiper-container">
      <ul class="loho_banner-wapper swiper-wrapper" >
        <li v-for="(item,idx) in info.pics" :key="idx" class="swiper-slide"><img :src="baseUrl + item"></li>
        <!-- <li class="swiper-slide"><img src="http://image.loho88.com/images/201804/goods_img/P_1523928871358168241.jpg"></li> -->
        <!-- <li class="swiper-slide"><img src="http://image.loho88.com/images/201804/goods_img/P_1523928871358168241.jpg"></li> -->
      </ul>
      <div class="loho_banner-navigation swiper-pagination"></div>
    </div>

    <div class="loho_detail-title">
      <p v-if="info.goodsName" class="title">{{info.goodsName}}</p>
      <p v-else class="title">
        loading...
      </p>
      <div class="share"><i class="icon-pingjia"></i><span>分享</span>  </div>
    </div>

    <div class="loho_detail-price">
      <span v-if="info.shopPrice" class="price">￥{{parseInt(info.shopPrice)}}</span>
      <span v-else class="price">￥0</span>
      <span class="express">快递：免运费</span>
      <span v-if="info.salesNum" class="count">{{info.salesNum}}人已买</span>
      <span v-else class="count">0人已买</span>
    </div>

    <div v-if="promiseTag" class="loho_conditionTag">
      <span v-for="(item,idx) in promiseTag" :key="idx" class="icon-circle-star">{{item}}</span>
      <!-- <span class="icon-circle-star">免费保养</span>
      <span class="icon-circle-star">免费保养</span>
      <span class="icon-circle-star">免费保养</span> -->
    </div>

    <div class="loho_chooseColor">
      <p class="statement">颜色选择</p>
      <ul v-if="models" class="colorlist">
        <li v-for="item in models" :key="item.goodsId" > <a :class="{active: item.goodsId == info.goodsId}" href="javascript:">{{item.color}}</a> </li>
        <!-- <li> <a href="javascript:">钢琴黑色</a> </li> -->
        <!-- <li> <a class="active" href="javascript:">钢琴黑色</a> </li> -->
      </ul>
    </div>

    <div class="loho_location">
      <p class="brank-title">天河万菱汇店</p>
      <div class="location-dis">
        <i class="icon-dingwei"></i>
        <a href="javascript:">免费预约直营店验光</a>
      </div>
      <div class="location-wrapper">
        <p class="location-abs">地址：广州市天河区天河路232号万菱汇B1层308号商铺（手扶梯旁）</p>
        <a class="icon-xiaolian" href="javascript:"></a>
      </div>
    </div>

    <div class="loho_look">
      <p class="look">查看广州26家门店（全国<em>304</em>家）</p>
      <i class="icon-chevronsmallright"></i>
    </div>

    <div class="loho_detail-wapper">
      <ul class="tap-list">
        <li><a :class="{active:1==txtcontent.type}" href="javascript:"><span>图文详情</span></a></li>
        <li><a href="javascript:"><span>商品评价</span></a></li>
        <li><a href="javascript:"><span>商品参数</span></a></li>
      </ul>
      <div v-html="txtcontent.value" class="loho_detail-list">
        <!-- <img src="http://image.loho88.com/images/ueditor/20180417/1523957693741262.jpg" alt=""> -->
      </div>
    </div>

    <div class="loho_detail-line">
      <span>看了又看</span>
    </div>

    <ul class="loho_sell-list">
      <li v-for="item in sellarr" :key="item.goodsId">
        <router-link :to="'/detailpage' + item.goodsId">
        <div class="img-wrapper">
          <img :src="item.img" alt="">
        </div>
        <p class="sell-title">{{item.title}}</p>
        <div class="price-wrapper">
          <span class="price">￥{{parseInt(item.price)}}</span>
          <span class="sell-count">{{item.salesNum}}人已买</span>
        </div>
        </router-link>
      </li>
      <!-- <li>
        <div class="img-wrapper">
          <img src="http://image.loho88.com/images/201802/G_1519694799568399470.jpg" alt="">
        </div>
        <p class="sell-title">LOHO 太阳镜 金属 钢琴黑色 时尚款</p>
        <div class="price-wrapper">
          <span class="price">￥599</span>
          <span class="sell-count">666人已买</span>
        </div>
      </li> -->
      <!-- <li>
        <div class="img-wrapper">
          <img src="http://image.loho88.com/images/201802/G_1519694799568399470.jpg" alt="">
        </div>
        <p class="sell-title">LOHO 太阳镜 金属 钢琴黑色 时尚款</p>
        <div class="price-wrapper">
          <span class="price">￥599</span>
          <span class="sell-count">666人已买</span>
        </div>
      </li> -->
      <!-- <li>
        <div class="img-wrapper">
          <img src="http://image.loho88.com/images/201802/G_1519694799568399470.jpg" alt="">
        </div>
        <p class="sell-title">LOHO 太阳镜 金属 钢琴黑色 时尚款</p>
        <div class="price-wrapper">
          <span class="price">￥599</span>
          <span class="sell-count">666人已买</span>
        </div>
      </li> -->
      
    </ul>

    <div class="loho_detail-line">
      <span>已经到底啦</span>
    </div>

    <div class="loho_backToTop ">
      <a href="#" class="icon-IconChevronUp"></a>
    </div>

    <div class="loho_detail-bottom">
      <div class="b-item b-small">
        <i class="icon-xiaolian"></i>
        <span>客服</span>
      </div>
      <div class="b-item b-small">
        <i class="icon-circle-star"></i>
        <span>收藏</span>
      </div>
      <div class="b-item b-book b-big">
        <a href="javascript:">
          预约附近验光点
        </a>
      </div>
      <div class="b-item b-add b-big">
        <a href="javascript:">
          加入购物车
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import myHeader from '../my/my-header/my-header'
import Swiper from '../../../lib/swiper.min'
import '../../../lib/swiper.css'

import axios from 'axios'
export default {
  data() {
    return {
      arguments:[],
      info:{},
      models:[],
      txtcontent: {type: 1 ,value:null},
      baseUrl:"http://image.loho88.com/",
      sellarr:[],
      promiseTag:null
    }
  },
  components:{
    'my-header': myHeader
  },
  methods:{
    myswidper:()=>{
      new Swiper('.swiper-container',{
        // direction: '',
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  },
  mounted(){
    let id = 2155;
    console.log('666');
    // let ip = '192.168.1.106';
    let ip = '10.3.133.82';
    axios.get(`http://${ip}:9090/getdetaildata/${id}`).then(res=>{
      res = res.data.result
      // console.log(res);
      if(res){
        this.arguments = res.arguments;
        this.info = res.info;
        this.models = res.models;
        this.txtcontent.value = res.txtcontent
        .replace(/\/includes/g,'http://image.loho88.com/includes')
        .replace(/\/images\/blank.gif/g,'./src/img/6619419539513878026.gif');
        // console.log(this.txtcontent)
      }else{

      }
      // console.log(this.txtcontent)
    }).catch(err=>{
      console.log(err)
    });

    axios.get(`http://${ip}:9090/getselldata/${id}`).then(res=>{
      res = res.data.result
      res.map((item)=>{
        item.img = item.img.replace(/images/,'http://image.loho88.com/images');
        // console.log(item.img);
        return item
      })
      this.sellarr = res; 
      // console.log(this.sellarr)
    }).catch(err=>{
      console.log(err)
    });
    // fetch('http://10.3.133.82:9090/getdetaildata').then(res=>{
    //   console.log(res,'fetch')
    // });
  },
  updated(){
    this.myswidper();
  }
}
</script>

<style lang="scss">
.loho_detail-page{
  background: rgb(241, 241, 241);
  padding-bottom: 60px;
}
.loho_detail-banner{
  background: white;
  .loho_banner-wapper{
    padding-top: 100px;
    padding-bottom: 90px;
    img{
      width: 100%;
    }
  }
  .swiper-pagination{
    background: -webkit-linear-gradient(bottom,#c8c8c8,rgba(255,255,255,0));
    padding-top: 65px;
    padding-bottom: 5px;
    .swiper-pagination-bullet-active{
      background-color: #E51C23;
      vertical-align: baseline;
      border: 0
    }
    .swiper-pagination-bullet{
      opacity: 1;
    }
  }
  

}
.loho_detail-title{
  background: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    padding-right: 40px;
    font-size: 14px;
  }
  .share{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // width: 40px;
    text-align: center;
    border-left: 1px solid rgb(228, 228, 228);
    i{
      display: block;
      &::before{
        font-size: 16px;
      }
    }
    span{
      font-size: 12px;
      width: 40px;
    }
  }
}
.loho_detail-price{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top: 1px solid rgb(214, 214, 214);
  background: white;
  span{
    font-size: 12px;
    color: rgb(59, 59, 59);

  }
  .price{
    font-size: 22px;
    color: #e8343b;
    height: 33px;
    font-weight: 500;
  }
  
}
.loho_conditionTag{
  display: flex;
  justify-content: space-between;
  background: rgb(226, 226, 226);
  border-top: 1px solid rgb(214, 214, 214);
  border-bottom: 1px solid rgb(214, 214, 214);
  span{
    padding: 10px 0px;
    width: 25%;
    font-size: 12px;
    text-align: center;
    &::before{
      margin-right: 5px;
    }
  }
}

.loho_chooseColor{
  padding: 10px 5px;
  background: white;
  .statement{
    font-size: 12px;
  }
  .colorlist{
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    li{
      margin-right: 10px;
      background: rgb(212, 212, 212);
      border-radius: 3px;
      a{
        padding: 8px 5px;
        display: block;
        text-align: center;
        font-size: 12px;
        &.active{
          background: #f60;
          color: white;
        }
      }
    }
  }
}

.loho_location{
  margin-top: 10px;
  background: white;
  padding: 10px;
  .brank-title{
    font-weight: 600;
    font-size: 14px;
  }
  .location-dis{
    padding: 10px 0;
    font-size: 12px;
    a{
      color: #e88534
    }
  }
  .location-wrapper{
    display: flex;
    justify-content: space-between;
    .location-abs{
      font-size: 12px;
    }
    a{
      width: 20%;
      text-align: center;
    }
  }
}
.loho_look{
  background: white;
  border-top: 1px solid rgb(218, 218, 218);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  .look{
    em{
      color: #f32930;
      font-style: normal;
    }
  }
  i{

  }
}

.loho_detail-wapper{
  margin-top: 10px;
  background: white;
  .tap-list{
    display: flex;
    border-bottom: 1px solid rgb(209, 209, 209);
    border-top: 1px solid rgb(209, 209, 209);
    li{
      width: 33%;
      a{
        padding: 14px 0;
        text-align: center;
        display: block;
        
        span{
          padding: 0 20px;
          display: block;
          border-right: 1px solid #eee;
        }
        &.active{
          color: #e8343b;
        }
      }
      &:last-child{
        a span{
          border-right:none;
        }
      }
    }
  }
  .loho_detail-list{
    padding: 10px;
    img{
      display: block;
      max-width: 100%;
    }
  }
}

.loho_detail-line{
  padding: 10px;
  position: relative;
  text-align: center;
  z-index: 1;
  &::before{
    content: "";
    position: absolute;
    background: rgb(194, 194, 194);
    height: 1px;
    width: 80%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  span{
    background: rgb(240, 240, 240);
    padding: 0 10px;
    font-size: 14px;
    color: #919191;
    // position: absolute;
    // display: block;
    // z-index: 2;
    // top: 50%;
    // left: 50%;
    // padding: 0 10px;
    // transform: translate(-50%,-50%),
  }
}

.loho_sell-list{
  display: flex;
  flex-wrap: wrap;
  background: white;
  li{
    width: 50%;
    padding: 10px;
    border-bottom: 1px solid rgb(214, 214, 214);
    border-right: 1px solid rgb(214, 214, 214);
    &:nth-child(2n){
      border-right: none;
    }
    .img-wrapper{
      text-align: center;
      padding: 20px 0;
      width: 2.1875rem;
      height: 1.875rem;
      img{
        max-width: 100%;
        width: 140px;
      }
    }
    .sell-title{
      font-size: 14px;
      line-height: 1.5;
      height: 3em;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .price-wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0 0 ;
      .price{
        display: block;
        font-size: 16px;
        color: #e8343b;
        font-weight: 600;
      }
      .sell-count{
        font-size: 12px;
        color: #919191;
      }
    }
  }
}

.loho_backToTop{
  position: fixed;
  right: 20px;
  bottom: 80px;
  background: rgba(255,255,255,0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(226, 226, 226); 
  z-index: 1000;
  & a::before{
    font-size: 12px;
  }
}

.loho_detail-bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  background: white;
  z-index: 101;
  .b-small{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
      font-size: 12px;
    }
  }
  .b-big {
    width: 30%;
    a{
      display: block;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.2031rem;
    }
  }
  .b-book{
    a{
      background: #e8343b;
      color: white;
    }
  }
  .b-add{
    a{
      color: white;
      background: #FF9500;
    }
  }

}
</style>
