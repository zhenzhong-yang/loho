<template>
    <div id="goods">
        <div id="search"><input type="text" placeholder="LOHO"  v-model="search" /><span @click="Search()">搜索</span><span id="addGoods" @click="add()">添加</span></div>
        <!-- <div id="addGoods"></div> -->
        <table>
            <thead>
                <tr>
                    <th>img</th>
                    <th>price</th>
                    <th>goodsId</th>
                    <th>salesNum</th>
                    <th>isNew</th>
                    <th>title</th>
                    <th>field</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data">
                    <td>{{item.img}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.goodsId}}</td>
                    <td>{{item.salesNum}}</td>
                    <td>{{item.isNew}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.field}}</td>
                    <td><span id="del" @click="delgoods(item)">删除</span><span id="edit" @click="Compile(item)">编辑</span></td>
                </tr>
            </tbody>
        </table>
        <div class="pop" v-show="pop">
            <div>
                <label> 图片地址 ：</label>
                <input type="text" placeholder="图片地址" v-model="goods.img"/>
            </div>
            <div>
                <label> 商品价格 ：</label>
                <input type="text" placeholder="商品价格" v-model="goods.price"/>
            </div>
            <div>
                <label> 商品标识 ：</label>
                <input type="text" placeholder="商品id" v-model="goods.goodsId" readonly/>
            </div>
            <div>
                <label> 售出数量 ：</label>
                <input type="text" placeholder="商品已售出数量" v-model="goods.salesNum" readonly/>
            </div>
            <div>
                <label> 热门商品 ：</label>
                <input type="text" placeholder="是否热门商品" v-model="goods.isNew"/>
            </div>
            <div>
                <label> 商品名称 ：</label>
                <input type="text" placeholder="商品名称" v-model="goods.title"/>
            </div>
            <div>
                <label> 商品类型 ：</label>
                <input type="text" placeholder="商品类型" v-model="goods.field"/>
            </div>
            <div>
                <span @click="save">保存</span><span @click="cancel()">取消</span>
            </div>
        </div>
        <div class="pop" v-show="addPop">
            <div>
                <label> 图片地址 ：</label>
                <input type="text" placeholder="图片地址" v-model="addgoods.img"/>
            </div>
            <div>
                <label> 商品价格 ：</label>
                <input type="text" placeholder="商品价格" v-model="addgoods.price"/>
            </div>
            <div>
                <label> 售出数量 ：</label>
                <input type="text" placeholder="商品已售出数量" v-model="addgoods.salesNum"/>
            </div>
            <div>
                <label> 热门商品 ：</label>
                <input type="text" placeholder="是否热门商品" v-model="addgoods.isNew"/>
            </div>
            <div>
                <label> 商品名称 ：</label>
                <input type="text" placeholder="商品名称" v-model="addgoods.title"/>
            </div>
            <div>
                <label> 商品类型 ：</label>
                <input type="text" placeholder="商品类型" v-model="addgoods.field"/>
            </div>
            <div>
                <span @click="addSave">保存</span><span @click="cancel()">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
    import "./goods.scss"
    import http from "../../../utils/httpclient.js"
    export default {
        data(){
            return{
                data:[],
                search:'',
                pop:false,
                addPop:false,
                goods:{
                    img:'',
                    price:'',
                    goodsId:'',
                    salesNum:'',
                    isNew:'',
                    title:'',
                    field:''
                },
                addgoods:{
                    img:'',
                    price:'',
                    goodsId:'',
                    salesNum:'',
                    isNew:'',
                    title:'',
                    field:''
                }
            }
        },
        mounted(){
            http.get("/serverGoods").then((res)=>{
                console.log(res)
                this.data = res.results;
            });
        },
        methods:{
            Search(){
              console.log(this.search.length)
              http.get("/searchGoods",{search:this.search}).then((res)=>{
                console.log(res)
                this.data = res.results;
              })
            },
            Compile(item){
                console.log(item)
                this.goods.img = item.img;
                this.goods.price = item.price;
                this.goods.goodsId = item.goodsId;
                this.goods.salesNum = item.salesNum;
                this.goods.isNew = item.isNew;
                this.goods.title = item.title;
                this.goods.field = item.field;
                this.pop = true;
            },
            save(){
                this.pop = false;
                http.get("/updateGoods",this.goods).then((res)=>{
                    if(res){
                        http.get("/searchGoods",{search:this.search}).then((res)=>{
                            console.log(res)
                            this.data = res.results;
                        })
                    }else{
                        alert("修改失败");
                    }
                })
            },
            cancel(){
                this.pop = false;
                this.addPop = false;
            },
            add(){
                console.log(666);
                this.addPop = true;

            },
            addSave(){
                this.addPop = false;
                console.log(this.addgoods)
                http.get("/addGoods",this.addgoods).then((res)=>{
                    console.log(res);
                    if(res.status){
                        http.get("/serverGoods").then((res)=>{
                            console.log(res)
                            this.data = res.results;
                        });
                    }
                })
            },
            delgoods(item){
                http.get("/del",{goodsId:item.goodsId}).then((res)=>{
                    console.log(res);
                    if(res.status){
                        http.get("/serverGoods").then((res)=>{
                            console.log(res)
                            this.data = res.results;
                        });
                    }
                })
            }
        }
    }
</script>