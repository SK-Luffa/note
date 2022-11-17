/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {withRouter} from "react-router-dom"
import React from 'react';

const Link = (props) => {
    return (
        <a href="javascript:" onClick={()=>{
            props.history.push(props.to)
        }}>{props.children}</a>
    );
};

const Letx = withRouter(Link)
export default Letx;