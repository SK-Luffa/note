import React from 'react'
import { useRoutes, Navigate } from "react-router-dom"

import Home from '../components/Home'
import About from '../components/About'
import AddOrEdit from '../components/AddOrEdit'
import Detail from '../components/Detail'
export default function Index() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate replace to='/home' />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/addOrEdit",
            element: <AddOrEdit />
        },
        {
            path: "/detail/:id",
            element: <Detail />
        },
        {
            path: "/edit/:id",
            element: <AddOrEdit />
        },

    ])

}
