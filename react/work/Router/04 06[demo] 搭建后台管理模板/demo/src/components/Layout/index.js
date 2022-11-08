import React, { Component } from 'react';
 import "./index.css"
import Studets from "./Studets"
import Wecome from "./Wecome"
import {Route ,Routes} from "react-router-dom"


//  import PropTypes from "prop-types";
class Layout extends Component {
    static propsTypes={
        // header:PropTypes.element,
        // aside:this.propsTypes.element ,
        // children:this.PropTypes.element
    }
    render() {
        return (
            <div className='container'>
             
                <header className="header">
                    {this.props.header}
                </header> 
                <div className="middle">
                    <div className="left"> {this.props.aside}</div>
                    <div className="right">
                        <Routes>
                            <Route path='/Student' element={<Studets/>} />
                            
                            <Route path='/' element={<Wecome />} />
                        </Routes>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Layout;