// vue-cli 的配置文件
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