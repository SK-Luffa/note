import {React} from 'react'
import { useParams } from 'react-router-dom'

//学生 详情
export default function Detail() {
 const obj=useParams();

     console.log(obj);
 

  return (
    <div>Detail</div>
  )
}
