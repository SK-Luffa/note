// let fs=require()
var axios=require("axios");
async function test(){
 const resp= await axios.get("https://movie.douban.com/chart");
 const body= resp.data;
 console.log(typeof body);
}
test();