import React from "react";
import StatusIcon from "@/components/StatusIcon";
import Vector_icon from "@/assets/icon/servicesDetails/Vector.png";
import "../index.less";

/**
 *基本属性
 *
 * @return {*}
 */
const Index = () => {
    return (
        <div className="list_block">
            <div className="title">
                <div className="title_text">基本属性</div>
                <img src={Vector_icon} alt="" className="list_icon" />
            </div>
            <div className="values">
                <div className="label">ID</div>
                <div className="value">i -w1fwxi sci</div>
            </div>
            <div className="values">
                <div className="label">名称</div>
                <div className="value">273949</div>
            </div>
            <div className="values">
                <div className="label">标签</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">描述</div>
                <div className="value">-</div>
            </div>
            <div className="values">
                <div className="label">状态</div>
                <div className="value">
                    <StatusIcon
                        color={"#0081CC"}
                        textColor={"#0081CC"}
                        text={"运行中"}
                    ></StatusIcon>
                </div>
            </div>
            <div className="values">
                <div className="label">时间同步</div>
                <div className="value">已经启用</div>
            </div>
            <div className="values">
                <div className="label">创建时间</div>
                <div className="value">2022-01-02-22</div>
            </div>
            <div className="values">
                <div className="label">状态更新时间</div>
                <div className="value">2022-02-02-22</div>
            </div>
            <div className="values">
                <div className="label">创建于</div>
                <div className="value">1时以前</div>
            </div>
        </div>
    );
};

export default Index;
