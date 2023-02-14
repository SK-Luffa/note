import { React, useEffect, useState, } from 'react'
import { getStuListApi } from "../api/stuApi"
import { useLocation, NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"

export default function Home() {
    // 之前是在home组件中维护 了一个状态stuList,用来存储从服务器获取到的数据
    // const [stuList, setStuList] = useState([])//存储所有的数据


    // 现在应该是从仓库store里面获取学生的数据

   const {stuList}= useSelector(state=>state.stu)

    const [serachItem, setSearchItem] = useState('')//存储用户输入的搜索的信息
    const location = useLocation()
    const [searchList, setSearchList] = useState([])//存储搜索后的数据

    //注意这里需要添加依赖项为空数组，代表只执行一次
    useEffect(() => {
        //之前我们是在该组件直接发送请求获取数据
        // getStuListApi().then(({ data }) => {

        //     setStuList(data);
        //     console.log(data);
        //     // console.log(setStuList);
        // })

        //现在我们应该是从仓库直接获取数据
    }, [])

    // 再来一个副作用函数，用于获取跳转到Home组件时传递的state数据
    useEffect(() => {
        console.log(location.state);
    }, [location])


    const changeHandle = (name) => {
        setSearchItem(name)
        const arr = stuList.filter(item => {
            return item.name.match(name)
        })
        setSearchList(arr)

    }
    //最终要显示的列表

    const list = serachItem ? searchList : stuList;

    const trs = list.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                    <NavLink to={`/detail/${item.id}`}>详情</NavLink>
                </td>
            </tr>
        )
    })



    return (
        <div>
            <h1>学生列表</h1>
            {/* 搜索 */}
            <input type="text" className='form-control' placeholder='搜索' value={serachItem} onChange={(e) => changeHandle(e.target.value)} />

            {/* 表格 */}

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>联系方式</th>
                        <th>操作 </th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
