<template>
    <div id="goods">
      <div><input type="text"placeholder="LOHO" /><span id="search" >搜索</span></div>
      
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
                  <td><span id="del">删除</span><span id="edit">编辑</span></td>
              </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
    import "./goods.scss"
    import http from "../../../utils/httpclient.js"
    export default {
        data(){
            return{
                data:[]
            }
        },
        mounted(){
            http.get("/serverGoods").then((res)=>{
                console.log(res)
                this.data = res.results
            })
        }
    }
</script>