import React from 'react';
//  import {Link} from "react-router-dom"
import BetterLink from './BetterLink'

const News = (props) => {
    return (
        <div>
            <nav>
                <BetterLink to={{ name: "NewsHome" }} >新闻首页</BetterLink>
                <BetterLink to={{ name: "NewsSearch" }} >新闻详情页</BetterLink>
                <BetterLink to={{ name: "NewsDetail" }}  >新闻搜索页</BetterLink>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default News;