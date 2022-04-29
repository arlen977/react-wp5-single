import React from "react";
import Vector_icon from "@/assets/icon/servicesDetails/Vector.png";
import "../index.less";

/**
 *配置
 *
 * @return {*}
 */
const Index = () => {
    return (
        <div className="list_block">
            <div className="title">
                <div className="title_text">配置</div>
                <img src={Vector_icon} alt="" className="list_icon" />
            </div>
            <div className="values">
                <div className="label">镜像</div>
                <div className="value">dfgdfghfhfh</div>
            </div>
            <div className="values">
                <div className="label">CPU数量</div>
                <div className="value">273949</div>
            </div>
            <div className="values">
                <div className="label">CPU拓扑结构</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">CPU体系架构</div>
                <div className="value">-</div>
            </div>

            <div className="values">
                <div className="label">GPU数量</div>
                <div className="value">运行中</div>
            </div>
            <div className="values">
                <div className="label">网卡列队</div>
                <div className="value">启用</div>
            </div>
            <div className="values">
                <div className="label">内存</div>
                <div className="value">8G</div>
            </div>
            <div className="values">
                <div className="label">系统盘</div>
                <div className="value">510G</div>
            </div>
            <div className="values">
                <div className="label">SSH密匙</div>
                <div className="value">*</div>
            </div>
        </div>
    );
};

export default Index;
