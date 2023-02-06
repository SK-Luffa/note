import { React, useEffect,useState } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getStuByIdApi,deleteStuByIdApi } from "../api/stuApi"

//学生 详情
export default function Detail() {
  const { id } = useParams();
  const navigate=useNavigate()
   const [stu,setStu]=useState({
     name: "",
     age: "",
     phone: "",
     email: "",
     education: "",
     graduationSchool: "",
     profession: "",
     profile: ""
   })

  //根据该ID获取该学生的详细信息
  useEffect(() => { 
    getStuByIdApi(id).then(({ data }) => {
      setStu(data)
    })
  }, [id])

  const deleteStu =(id)=>{
    if (window.confirm("你是否确定要删除此用户?")){
      deleteStuByIdApi(id).then((data)=>{
       navigate("/home",{
         state:{
           alert:'用户删除成功',
           type:'info'
         }
       })
      })
    }
  }

  return (
    <>
  
      <div className="details container">
        <button className="btn btn-default" onClick={()=>{navigate("/home")}}>
          返回
        </button>
          <h1 className="page-header">
            {stu.name}
            <span className='pull-right'>
              <button className="btn btn-primary" onClick={() => navigate(`/edit/${stu.id}`)} style={{ marginRight: 10 }}>修改</button>
              <button className="btn btn-danger" onClick={() => deleteStu(stu.id)}>删除</button>
            </span>
          </h1>
          <ul className="list-group">
            <li className="list-group-item"><span className="glyphicon glyphicon-phone">电话:{stu.phone}</span></li>
            <li className="list-group-item"><span className="glyphicon glyphicon-envelope">邮箱:{stu.email}</span></li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="glyphicon glyphicon-hook">文化水平:{stu.educatiom}</span>
            </li>
            <li className="list-group-item">
              <span className="glyphicon glyphicon-flag">毕业院校:{stu.graduationschool}</span>
            </li>
            <li className="list-group-item">
              <span className="glyphicon glyphicon-briefcase">专业:{stu.profession}</span>
            </li>
            <li className="list-group-item">
              <span className="glyphicon glyphicon-user">个人简介:{stu.profile}</span>
            </li>
          </ul>

        
      </div>
    </>
   
  )
}
