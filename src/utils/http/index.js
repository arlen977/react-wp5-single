import axios from "axios";
import { message as antMsg } from "antd";
import { baseConfig } from "./config.js";

import Storage from "@/utils/storage";

const storage = new Storage();
const userInfo = storage.reduxStorageS("userInfo");

// axios.defaults.withCredentials = true;
// 请求取消
const CancelToken = axios.CancelToken;
window.axiosCancel = null;

// 创建axios 实例
const service = axios.create({
    ...baseConfig,
});

// request 拦截器
service.interceptors.request.use(
    (config) => {
        // 配置当前的cancelToken 保存cancel
        config.cancelToken = new CancelToken((c) => {
            window.axiosCancel = c;
        });

        // 这里可以自定义一些config 配置
        if (userInfo.authorizationToken) {
            // 让每个请求携带自定义token 请根据实际情况自行修改
            config.headers["authorizationToken"] = userInfo.authorizationToken;
        }

        console.log(
            `%c接口 ${config.url} 请求数据：`,
            "color:#8cdcfe;font-size:13px;",
            config.data
        ); // 方便调试查看

        return config;
    },
    (error) => {
        antMsg.error("请求失败，请刷新重试！");
        //  这里处理一些请求出错的情况
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    (response) => {
        window.axiosCancel = null;

        let resetData = response.data;

        const urlName = response.config.url;
        console.log(
            `%c接口 ${urlName} 返回数据：`,
            "color:#00be00;font-size:13px;",
            resetData
        ); // 方便调试查看

        // 这里处理一些response 正常放回时的逻辑  全局拦截返回状态
        switch (resetData.code) {
            // 正常状态
            case "0000":
                return resetData;
            // 过期状态
            case "2200":
                antMsg.warning(resetData.message);

                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000);
                return;
            // 其余状态
            default:
                antMsg.warning(resetData.message);
                return Promise.reject(resetData);
        }
    },
    (error) => {
        // 中断链接
        if (axios.isCancel(error)) {
            return Promise.reject(error);
        }
        // 这里处理一些response 出错时的逻辑
        //  1.判断请求超时
        if (
            error.code === "ECONNABORTED" &&
            error.message.indexOf("timeout") !== -1
        ) {
            antMsg.error("请求超时，请刷新重试！");
        } else if (error.message.indexOf("500") !== -1) {
            antMsg.error("服务器错误，请刷新重试！");
        } else {
            antMsg.error("系统错误，请刷新重试");
            return Promise.reject(error);
        }
    }
);

export default service;
