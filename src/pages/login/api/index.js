import axios from "@/utils/http";

/**
 *用户登录 mock
 *
 * @author zhaozy
 * @date 2021/03/11
 * @export
 * @param data
 * @returns {*}
 */
export function USER_LOGIN(data = {}) {
    return axios({
        url: "/user/login",
        method: "post",
        data,
    });
}
