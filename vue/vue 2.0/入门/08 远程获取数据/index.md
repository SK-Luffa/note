获取远程数据的几种方式

xhr  XMLhttpRequest

fetch h5

### axios
   * axios  首先 npm i axios
    * 然后在src下创建一个文件夹api 创建一个文件index.js    

   import axios from "axios"

     async function posts() {
       const a = await axios.get("http://localhost:8080/commercial_api/banners_v3/pc_top_banner?") 
       console.log(a)
     }
   posts();
* 然后引入到main.js  import "axios"
    * 然后在根目录创建一个vue.config.js //这个是vue-cli的配置文件 
* 配置规则如下
    module.exports={
    devServer:{ 
   proxy:{
       "/api":{
           
           target:"https://www.zhihu.com"
       },
       "/commercial_api":{
           target: "https://www.zhihu.com"
       }
   }
    }
} 


### mockjs
 * 首先下载mockjs 
    npm i mockjs
 * 创建一个文件在src目录下  这里我创建的是mock/banner.js  这里面写的就是请求拦截规则
 * 例子
    import Mock from "mockjs"
    Mock.mock("/api/banner","get",{
       code:0,
       msg:"",
       data:[
             {
              id:"xxxx",
              name:"xxx"
             }
            ]
     })

* 最后 引入到main.js
