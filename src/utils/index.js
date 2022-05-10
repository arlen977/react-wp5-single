/**
 *获取url参数
 *
 * @author zhaozy
 * @date 2021/04/23
 * @export
 * @param variable
 * @returns {*}
 */
export function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}

/**
 *获取某个字符出现的位置
 *
 * @export
 * @param {*} str
 * @param {*} queryStr
 * @param {*} pon
 * @return {*}
 */
export function findPosition(str, queryStr, pon) {
    var x = str.indexOf(queryStr);
    for (var i = 0; i < pon; i++) {
        x = str.indexOf(queryStr, x + 1);
    }
    return x;
}
