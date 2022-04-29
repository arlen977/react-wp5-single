import React from "react";
import { useRoutes } from "react-router-dom";

// 懒加载
const lazyLoad = (path) => {
    const Comp = React.lazy(() => import(`@/pages/${path}`));
    return (
        <React.Suspense fallback={<>加载中...</>}>
            <Comp />
        </React.Suspense>
    );
};

/**
 *主路由
 *
 * @return {*}
 */
const routes = [
    { path: "/", element: lazyLoad("login") },
    {
        path: "dashboard",
        auth: true,
        element: lazyLoad("frame/layout"),
        children: [
            {
                path: "services",
                element: lazyLoad("business/servicesDetails"),
            },
        ],
    },

    // 重定向
    { path: "home", redirectTo: "/" },
    // 404找不到
    // { path: "*", element: <div>jjj</div> },
];

const MyRoutes = () => {
    const ele = useRoutes(routes);
    return ele;
};

export default MyRoutes;
