 import {React,useEffect} from 'react'
 import {getStuListApi} from "../api/stuApi"


 export default function Home() {

    useEffect(()=>{
        getStuListApi().then((res)=>{

            console.log(res);
        })
    })


   return (
     <div>Home</div>
   )
 }
 