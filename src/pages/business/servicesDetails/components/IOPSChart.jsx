import React, { useState } from "react";
import { Switch } from "antd";
import StatusIcon from "@/components/StatusIcon";
import Echart from "@/components/Echart";
import "../index.less";

/**
 *IOPS
 *
 * @return {*}
 */
const IOPSChart = () => {
    const [options] = useState({
        grid: {
            top: 33,
            left: 68,
            bottom: 40,
            right: 20,
        },
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
            },
            {
                data: [100, 150, 200, 150, 100, 120, 180],
                type: "line",
            },
        ],
    });

    return (
        <div className="chart_list chart_left">
            <div className="chart_title">IOPS</div>
            <div className="chart_desc">
                <div className="desc_left">
                    <div className="desc_list">
                        <div className="desc_label">单位:</div>
                        <div className="desc_value">硬盘IOPS</div>
                        <StatusIcon
                            color={"#0081CC"}
                            textColor={"#697886"}
                            text={"读"}
                        ></StatusIcon>
                        <StatusIcon
                            color={"#1B9962"}
                            textColor={"#697886"}
                            text={"写"}
                        ></StatusIcon>
                    </div>
                    <div className="desc_list">
                        <div className="desc_label">间隔:</div>
                        <div className="desc_value">5分钟</div>
                    </div>
                </div>
                <div className="chart_switch">
                    <Switch
                        className="chart_switch"
                        checkedChildren="开启"
                        unCheckedChildren="关闭"
                    />
                </div>
            </div>
            <Echart
                options={options}
                style={{ width: "606px", height: "224px" }}
            ></Echart>
        </div>
    );
};

export default IOPSChart;
