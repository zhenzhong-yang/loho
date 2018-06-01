<template>
    <div id="user">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data">
                    <td>{{item.id}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.password}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import "./user.scss"
    import http from "../../../utils/httpclient.js"
    export default {
        data(){
            return{
                data:[]
            }
        },
        mounted(){
            http.get("/getUser").then((res)=>{
                console.log(res)
                this.data = res.results
            })
        }
    }
</script>