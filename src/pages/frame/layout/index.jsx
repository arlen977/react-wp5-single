import React from "react";
import { Button } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    const go = () => {
        navigate("/dashboard/services");
    };
    return (
        <div>
            <Button onClick={go}>去子路由</Button>
            {/* 路由占位符 */}
            <Outlet />
        </div>
    );
};

export default Layout;
