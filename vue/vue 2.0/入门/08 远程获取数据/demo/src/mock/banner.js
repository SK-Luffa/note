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