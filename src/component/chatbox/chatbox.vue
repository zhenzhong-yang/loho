<template>
    <div class="loho_chatbox">
        <ul class="chatbox_header">
            <li><router-link to="/classify"><i class="icon iconfont icon-back-line"></i></router-link></li>
            <li></i><span>loho眼镜生活</span></li>
            <li></li>
        </ul>
        <div class="chatbox_nav">
            <ul class="neirong">
            </ul>
        </div>
        <div class="emotionsBox">
            <label class="xinxi">
                <input type="text" placeholder="请输入信息" class="sr"/>
                <button class="btn" @click=btn>发送</button>
            </label>
            <ul class="chatbox_footer">
                <li><router-link to=""><i class="icon iconfont icon-14 upload"></i></router-link></li>
                <li class="sc"><router-link to=""><i class="icon iconfont icon-xinaixin" @click="pingjia"></i></router-link></li>
                <li class="bq"><router-link to=""><i class="icon iconfont icon-xiaolian biao" @click="biao"></i></router-link></li>
            </ul>
            <div class="emotionsWsap" v-show="this.data">
                <ul class="face">
                    <li @click="tb" class="tb1"><img src="../../img/emo_04.gif"/></li>
                    <li><img src="../../img/emo_07.gif" /></li>
                    <li><img src="../../img/emo_08.gif" /></li>
                    <li><img src="../../img/emo_15.gif" /></li>
                    <li><img src="../../img/emo_16.gif" /></li>
                    <li><img src="../../img/emo_17.gif" /></li>
                    <li><img src="../../img/emo_18.gif" /></li>
                    <li><img src="../../img/emo_19.gif" /></li>
                    <li><img src="../../img/emo_20.gif" /></li>
                    <li><img src="../../img/emo_21.gif" /></li>
                    <li><img src="../../img/emo_22.gif" /></li>
                    <li><img src="../../img/emo_23.gif" /></li>
                    <li><img src="../../img/emo_24.gif" /></li>
                    <li><img src="../../img/emo_25.gif" /></li>
                    <li><img src="../../img/emo_26.gif" /></li>
                    <li><img src="../../img/emo_27.gif" /></li>
                    <li><img src="../../img/emo_28.gif" /></li>
                    <li><img src="../../img/emo_29.gif" /></li>
                    <li><img src="../../img/emo_30.gif" /></li>
                    <li><img src="../../img/emo_32.gif" /></li>
                    <li><img src="../../img/emo_31.gif" /></li>
                    <li><img src="../../img/emo_44.gif" /></li>
                    <li><img src="../../img/emo_35.gif" /></li>
                    <li><img src="../../img/emo_36.gif" /></li>
                    <li><img src="../../img/emo_37.gif" /></li>
                    <li><img src="../../img/emo_38.gif" /></li>
                    <li><img src="../../img/emo_39.gif" /></li>
                    <li><img src="../../img/emo_40.gif" /></li>
                    <li><img src="../../img/emo_41.gif" /></li>
                </ul>
            </div>
        </div>
        <div class="pingjia" v-show="this.show">
            <span class="shan" @click="shan">X</span>
            <div class="panel-bd">
                <div class="survey-title">请对我的服务进行评价</div>
                <div class="form-group">
                    <textarea class="form-textarea"></textarea>
                </div>
            </div>
            <div class="panel-ft">
                <button class="btn" @click="dialog">确定</button>
            </div>
            <div class="dialog" v-show="this.show"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import "./chatbox.scss"
    import jQuery from "../../utils/jquery-3.2.1.js"
    export default {
        data(){
            return {
                data:false,
                show:false,
            }
        },
        methods : {
            
            biao(){
                if(this.data == true){
                    this.data = false
                }else{
                    this.data = true
                }
            },
            btn(){
                jQuery(function($){
                    let neirong = $('.neirong');
                    let sr = $('.sr')[0];
                    let btn = $('.btn');

                    let q = '你好,在吗'.split(',');
                    let a = '好,在'.split(',');

                    let _sr = sr.value;

                    
                    let qLi = $("<li></li>");
                    
                    qLi.append(_sr);
                    qLi.addClass('active');
                    neirong.append(qLi);
                    
                    setTimeout(function(){
                        
                        let aLi = $("<li></li>");
                        aLi.addClass('active1');
                        
                        let idx = q.indexOf(_sr);

                        if(idx >= 0){
                            aLi.html(a[idx]);
                        }else{
                            aLi.html('???');//jquery的方法
                            //aLi.innerHTML = '???'//原生的方法
                        }
                        neirong.append(aLi);
                    },1000)

                    sr.value = '';
                    sr.focus();

                })
                
            },
            tb(){
                jQuery(function($){
                    let sr = $('.sr');
                    let tb1 = $('.tb1');
                    console.log(tb1);
                    console.log(sr);
                    sr.innerHTML = tb1;
                })
            },
            pingjia(){
                if(this.show == true){
                    this.show = false
                }else{
                    this.show = true
                }
            },
            shan(){
                if(this.show == true){
                    this.show = false
                }else{
                    this.show = true
                }
            },
            dialog(){
                if(this.show == true){
                    this.show = false
                }else{
                    this.show = true
                }
            }
        },
        mounted:function(){
            
        }
        
    }
</script>