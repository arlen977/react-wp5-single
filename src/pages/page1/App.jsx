import React from "react";
import { ProgressCircle, Space } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
import { getQueryVariable } from "@/utils";

import styles from "./App.less";

export default () => {
    console.log(process.env.APP_ENV);
    console.log(getQueryVariable);
    return (
        <>
            <ProgressCircle percent={50}>50%</ProgressCircle>

            <Space style={{ "--gap": "24px" }}>
                <ProgressCircle percent={75} style={{ "--track-width": "2px" }}>
                    75%
                </ProgressCircle>
                <ProgressCircle percent={75} style={{ "--track-width": "3px" }}>
                    75%
                </ProgressCircle>
                <ProgressCircle percent={75} style={{ "--track-width": "4px" }}>
                    75%
                </ProgressCircle>
            </Space>

            <Space style={{ "--gap": "24px" }} align="center">
                <ProgressCircle percent={50} style={{ "--size": "40px" }}>
                    <span>50%</span>
                </ProgressCircle>
                <ProgressCircle percent={75} style={{ "--size": "60px" }}>
                    <span>75%</span>
                </ProgressCircle>
                <ProgressCircle percent={100} style={{ "--size": "90px" }}>
                    <span>100%</span>
                </ProgressCircle>
            </Space>

            <Space style={{ "--gap": "24px" }}>
                <ProgressCircle
                    percent={50}
                    style={{
                        "--fill-color": "#FF3141",
                    }}
                >
                    <CloseOutline
                        style={{ color: "#FF3141", fontSize: "18px" }}
                    />
                </ProgressCircle>
                <ProgressCircle
                    percent={100}
                    style={{ "--fill-color": "#00B578" }}
                >
                    <span>Done</span>
                </ProgressCircle>
                <ProgressCircle
                    percent={35}
                    style={{ "--fill-color": "orange" }}
                >
                    <span>
                        25
                        <br />
                        次/天
                    </span>
                </ProgressCircle>
            </Space>
            <h1 className="warning">第一页</h1>
        </>
    );
};
