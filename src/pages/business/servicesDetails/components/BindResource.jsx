import React from "react";
import Vector_icon from "@/assets/icon/servicesDetails/Vector.png";
import "../index.less";

/**
 *绑定资源
 *
 * @return {*}
 */
const Index = () => {
    return (
        <div className="list_block">
            <div className="title">
                <div className="title_text">绑定资源</div>
                <img src={Vector_icon} alt="" className="list_icon" />
            </div>
            <div className="values">
                <div className="label">安全组</div>
                <div className="value">默认安全组</div>
            </div>
            <div className="values">
                <div className="label">内网IP</div>
                <div className="value">(vnet - workbench) 172.16.0.9</div>
            </div>
            <div className="values">
                <div className="label">公网IPV4</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">后端网卡</div>
                <div className="value">(vnet - workbench) 172.16.0.9</div>
            </div>

            <div className="values">
                <div className="label">安装策略组</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">内网域名区别</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">设备</div>
                <div className="value">-</div>
            </div>
        </div>
    );
};

export default Index;
