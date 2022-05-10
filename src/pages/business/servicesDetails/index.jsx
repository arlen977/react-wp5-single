import React from "react";
import { Button, Radio, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import BasicInfo from "./components/BasicInfo";
import ConfigInfo from "./components/ConfigInfo";
import BindResource from "./components/BindResource";
import LeaseInfo from "./components/LeaseInfo";
import CPUChart from "./components/CPUChart";
import StorageChart from "./components/StorageChart";
import IOPSChart from "./components/IOPSChart";
import DevourChart from "./components/DevourChart";
import BPSChart from "./components/BPSChart";
import PPSChart from "./components/PPSChart";

import "./index.less";

export default () => {
    const handleSizeChange = e => {
        console.log(e);
    };
    const menu = (
        <Menu
            items={[
                {
                    label: "1st menu item",
                    key: "1",
                    //   icon: <UserOutlined />,
                },
                {
                    label: "2nd menu item",
                    key: "2",
                    //   icon: <UserOutlined />,
                },
                {
                    label: "3rd menu item",
                    key: "3",
                    //   icon: <UserOutlined />,
                },
            ]}
        />
    );
    return (
        <div className="App">
            <div className="list_left">
                <BasicInfo></BasicInfo>
                <ConfigInfo></ConfigInfo>
                <BindResource></BindResource>
                <LeaseInfo></LeaseInfo>
                <div className="handle_log">查看操作日志</div>
            </div>
            <div className="list_right">
                <div className="tool_btn">
                    <Radio.Group onChange={handleSizeChange} optionType="button" buttonStyle="solid">
                        <Radio.Button value="a">最近6小时</Radio.Button>
                        <Radio.Button value="b">最近一天</Radio.Button>
                        <Radio.Button value="c">最近两周</Radio.Button>
                        <Radio.Button value="d">最近一个月</Radio.Button>
                        <Dropdown overlay={menu}>
                            <Button>
                                <Space>
                                    Button
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Radio.Group>
                </div>
                <div className="chart_box">
                    <CPUChart></CPUChart>
                    <StorageChart></StorageChart>
                </div>
                <div className="line"></div>
                <div className="camera_box">
                    <div className="camera_btn_tool">
                        <Radio.Group onChange={handleSizeChange} optionType="button" buttonStyle="solid">
                            <Radio.Button value="c">最逻辑盘监控</Radio.Button>
                            <Radio.Button value="d">物理盘监控</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="camera_title">逻辑盘NT-VDA1_ _OS监控</div>
                    <div className="camera_desc">INODE [查看监控图]</div>
                    <div className="camera_info">
                        <span className="item1">/</span>
                        <div className="item2">2%</div>
                        <span className="item3">已使用: 25155</span>
                        <span className="item4">剩余: 26188221</span>
                    </div>
                    <div className="camera_title">逻辑盘VDA1(系统盘)监控</div>
                    <div className="camera_desc">使用率 [查看监控图]</div>
                    <div className="camera_info">
                        <span className="item1">/</span>
                        <div className="item2">2%</div>
                        <span className="item3">已使用: 25155</span>
                        <span className="item4">剩余: 26188221</span>
                    </div>
                </div>
                <div className="chart_box">
                    <IOPSChart></IOPSChart>
                    <DevourChart></DevourChart>
                </div>
                <div className="line"></div>
                <div className="tip">提示:开启网卡多队列服务，可以提升网卡pps能力。怎样开启网卡多队列?</div>
                <div className="chart_box">
                    <BPSChart></BPSChart>
                    <PPSChart></PPSChart>
                </div>
            </div>
        </div>
    );
};
