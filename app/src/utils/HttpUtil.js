/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const requestUrl = (url, params) => {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
        if (url.search(/\?/) === -1) {
            typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url;
};


export default class HttpUtil {

    static get(url, params, succss, failure) {
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
            if (url.search(/\?/) === -1) {
                typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
            } else {
                url += '&' + paramsArray.join('&')
            }
        }

        fetch(url).then(response =>
            response.json()
        ).then(result => {
            console.log(result);
            succss(result);
        }).catch(e => {
            console.log(e);
            failure(e);
        })
    }

    static post(url, params, succss, failure) {
        fetch(url, {
            method: 'POST',
            body: params
        }).then((response) =>
            response.json()
        ).then((result) => {
            console.log(result);
            succss(result);
        }).catch(e => {
            console.log(e);
            failure(e);
        })
    }
}