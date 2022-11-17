import React from 'react';

import { Route, Switch } from "react-router-dom"
import routeConfig from './routeConfig';

// 根据一个路由配置数组，遍历该数组，得到一组Route组件
function getRoutes(routes, basePath) {
    if (!Array.isArray(routes)) {
        return
    }
    let rs = routes.map((item, index) => {
        const { path, name, children, component: Component, ...rest } = item;
        let newPath = `${basePath}${path}`;
        newPath = newPath.replace(/\/\//g, '/')
        return <Route key={index} {...rest}
            path={newPath}
            render={
                values => {
                    return <Component {...values}  >
                        {getRoutes(item.children, newPath)}
                    </Component>
                }
            }
        />
    })
    return <Switch>
        {rs}
    </Switch>

}

// 使用Route组件根据不同的路径，渲染顶级页面
const RootRouter = () => {
    return (
        <>
            {/* 返回的就是一组Route */}

            {getRoutes(routeConfig, "/")}

        </>
    );
};

export default RootRouter;