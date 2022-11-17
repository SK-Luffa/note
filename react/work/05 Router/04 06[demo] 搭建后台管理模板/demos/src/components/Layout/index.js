import React, { Component } from 'react';
 import "./index.css"

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
                    <div className="right"></div>
                </div>
            </div> 
        );
    }
}

export default Layout;