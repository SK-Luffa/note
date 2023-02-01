import { React, useState } from 'react'
import {addStuApi} from '../api/stuApi'
import {useNavigate} from "react-router-dom"

// 该组件有两个功能一个是添加一个是修改
export default function AddOrEdit(pros) {
    const navigate = useNavigate();
    //创建一个表单状态
    const [stu, setStu] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        education: "",
        graduationSchool: "",
        profession: "",
        profile: ""
    })

    // 绑定受控组件的onchange事件
    const updateStuInfo = (newInfo, attribute_name) => {
        // console.log(newInfo, attribute_name);
        // 根据对应的key来更新value  
        // 对年龄进行一个判断
        if (attribute_name === 'age' && isNaN(newInfo)) {
            return
        }
        if (attribute_name === 'phone' && isNaN(newInfo)) {
            return
        }
        const newstuInfo = { ...stu }
        newstuInfo[attribute_name] = newInfo.trim();
        setStu(newstuInfo)

    }
    // 表单提交
    const submitStuInfo = (e) => {
        e.preventDefault()

        for (const key in stu) {
           
            if(!stu[key]){
                debugger
                alert("请完善表单的每一项")
                return
            }
           
        }
        addStuApi(stu).then(()=>{
            // 跳转
            navigate("/home",{
                state:{
                    alert:"用户添加成功",
                    type:"success"
                }
            })
        })
    }
    return (
        <div className="contatiner">
            <div className="page-header">添加用户</div>
            <form id='myFrom' onSubmit={submitStuInfo}>
                <div className="well">
                    <div className="form-group">
                        <label >姓名</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请填写用户姓名'
                            value={stu.name}
                            onChange={(e) => updateStuInfo(e.target.value, 'name')}
                        />
                    </div>
                    <div className="form-group">
                        <label >年龄</label>
                        <input type=" "
                            className='form-control'
                            placeholder='请填写用户年龄'
                            value={stu.age}
                            onChange={(e) => updateStuInfo(e.target.value, 'age')}
                        />
                    </div>
                    <div className="form-group">
                        <label >联系方式</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请填写用户联系方式'
                            value={stu.phone}
                            onChange={(e) => updateStuInfo(e.target.value, 'phone')}
                        />
                    </div>
                    <div className="form-group">
                        <label >电子邮箱</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请填写用户联系方式'
                            value={stu.email}
                            onChange={(e) => updateStuInfo(e.target.value, 'email')}
                        />
                    </div>
                    <div className="form-group">
                        <label >学历</label>
                        <select
                            className='form-control'

                            value={stu.education}
                            onChange={(e) => updateStuInfo(e.target.value, 'education')}
                        >
                            <option >小学</option>
                            <option >初中或职中</option>
                            <option >高中或职高</option>
                            <option >专科</option>
                            <option >本科</option>
                            <option >硕士</option>
                            <option >博士</option>
                        </select>
                    </div>
                    <div className="from-group">
                        <label >毕业学校</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请填写用户毕业院校'
                            value={stu.graduationSchool}
                            onChange={(e) => updateStuInfo(e.target.value, 'graduationSchool')}
                        />
                    </div>
                    <div className="from-group">
                        <label >职业</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请填写用户从事的相关职业'
                            value={stu.profession}
                            onChange={(e) => updateStuInfo(e.target.value, 'profession')}
                        />
                    </div>
                    <div className="from-group">
                        <label >个人简介</label>
                        <input type="text"
                            className='form-control'
                            placeholder='请简单的介绍一下你自己，包括兴趣、爱好信息...'
                            value={stu.profile}
                            onChange={(e) => updateStuInfo(e.target.value, 'profile')}
                        />
                    </div>

                </div>
                <button type='submit' className='btn btn-primary'>确认添加</button>
            </form>
        </div>
    )
}
