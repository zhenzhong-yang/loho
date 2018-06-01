<template>
    <div class="login">
        <div class="login-box">
            <div class="username">
                <label>用户名：</label>
                <input type="text" name="username" placeholder="请输入用户名" v-model="data.username">
            </div>
            <div class="password">
                <label> 密   码 ：</label>
                <input type="password" name="password" placeholder="请输入密码" v-model="data.password">
            </div>
            <div class="serverBtn">
                <input type="button" class="btn btn-primary  m-t-n-xs" value="登录" @click="login">
            </div>
            <div class="copyright"></div>
        </div>
    </div>
</template>

<script>
    import './login.scss';
    import router from '../../../router/router.js'
    import http from '../../../utils/httpclient.js'
    export default {
        data(){
            return {
                data:[
                    {userId:'18877121121',goodsId:1},
                    {userId:'18877121121',goodsId:2}
                ]
            }
        },
        methods: {
            login(){
                http.post('/delGoods',{data:JSON.stringify(this.data)}).then((res)=>{
                      console.log(res);
                    // if(!res.status){
                    //     window.alert("用户名或密码错误")
                    // }else{
                    //     router.push({name:'server'});
                    // }
                })
                
            }
        }
    }
</script>