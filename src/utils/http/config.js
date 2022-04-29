// 一些全局的config配置
const modeUrlObj = {
    // 开发环境
    development: {
        baseURL:
            "https://mock.mengxuegu.com/mock/626b53c81e3d7470073a2207/example",
    },
    // 准生产环境
    standard: {
        baseURL:
            "https://mock.mengxuegu.com/mock/626b53c81e3d7470073a2207/example",
    },
    // 生产环境
    production: {
        baseURL:
            "https://mock.mengxuegu.com/mock/626b53c81e3d7470073a2207/example",
    },
};

const baseConfig = {
    baseURL: modeUrlObj[process.env.APP_ENV].baseURL, // api的base_url
    timeout: 30000, // 请求超时时间
};
export { modeUrlObj, baseConfig };
