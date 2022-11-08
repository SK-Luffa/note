import React from 'react';
import Layout from '../../Layout';
import Header from "../../Header"
import {Route,Routes} from "react-router-dom"
import Menu from "../../Menu"
const Admin = () => {
    return (
        <div>
         
            <Routes>
              
                <Route path='/*' element={<Layout header={<Header />} aside={<Menu/>} />} />
            </Routes>
        </div>
    );
};

export default Admin;