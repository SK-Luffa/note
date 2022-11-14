import News  from "./News"
import NewsHome from "./NewsHome"
import NewsSearch from "./NewsSearch"
import NewsDetail from "./NewsDetail"
import Home from "./Home"
const routeConfig = [
    {
        path: "/",
        name:"home",
        exact: true,
        component: Home
    },
    {
        path: "/nss",
        name: "News  ",
        // exact: true,
        component: News,
        children:[
            {
                path:"/",
                name:"NewsHome",
                exact:true,
                component:NewsHome
            },
            {
                path: "/newsSearch", 
                name: "NewsSearch",
                exact: true,
                component: NewsSearch
            },
            {
                path: "/newsDetail",
                name: "NewsDetail",
                exact: true,
                component: NewsDetail
            }
        ]
    },
    
]

export default routeConfig