import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "./api";
import { observer } from "mobx-react-lite";
import { useStores } from "@/store";

import "./index.less";

const Login = observer(() => {
    const navigate = useNavigate();
    const { counterStore } = useStores();
    const { counter } = counterStore;
    console.log(counter);
    const go = () => {
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
        USER_LOGIN().then(res => {
            console.log(res);
        });
    };

    return (
        <>
            <Button onClick={go} type="primary">
                登录页
            </Button>
            <div className="test">测试颜色</div>
            {/* <div>{ }</div> */}
        </>
    );
});

export default Login;
