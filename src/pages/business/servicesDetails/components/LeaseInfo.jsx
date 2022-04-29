import React from "react";
import Vector_icon from "@/assets/icon/servicesDetails/Vector.png";
import "../index.less";

/**
 *租赁信息
 *
 * @return {*}
 */
const Index = () => {
    return (
        <div className="list_block">
            <div className="title">
                <div className="title_text">租赁信息</div>
                <img src={Vector_icon} alt="" className="list_icon" />
            </div>
            <div className="values">
                <div className="label">开始时间</div>
                <div className="value">2022-01-02-22</div>
            </div>
            <div className="values">
                <div className="label">停止计费时间</div>
                <div className="value">2022-01-02-22</div>
            </div>
            <div className="values">
                <div className="label">价格</div>
                <div className="value">￥0.7888/h</div>
            </div>
        </div>
    );
};

export default Index;
