import axios from "axios"
import { reject, resolve } from "core-js/fn/promise"
const toString = Object.prototype.toString

// 创建axios实例
const service = axios.create({
    timeout: 305000 //请求超时时间
})

function isJSON(val) {
    if (typeof val !== "string") {
        return false
    }
    try {
        const obj = JSON.parse(val)
        if (Object.prototype.toString.call(obj) === "[object Object]") {
            return true
        } else {
            return false
        }
    } catch (e) {
        return false
    }
}

// 请求拦截器
service.interceptors.request.use(
    config => {
        config.headers["Authorization"] = window.accesstoken //让每个请求携带自定义token 根据实际情况自行修改
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // code为非20000是抛错 可结合自己业务进行修改
        const { data, request } = response
        const resData = isJSON(data) ? JSON.parse(data) : data
        const code = (resData && resData.code) || " -- "
        const info = "Info:" + code + " " + request.responseURL
        if (resData.code > 300) {
            return Promise.reject(info)
        } else {
            if (typeof resData === "object") {
                return resData
            } else {
                return response
            }
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export function request(_param) {
    const {
        method = "get",
        // 'responseType'表示服务器响应的数据类型，可以是'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType = "json", //默认的
        headers = {},
        url = "",
        params,
        data,
        ...otherData
    } = _param

    if (!url) {
        return new Promise((resolve, reject) => {
            reject("url is null")
        })
    }
    const _method = method.toLowerCase()

    if (_method === "get") {
        return axios({
            responseType,
            url,
            headers,
            method,
            params: params || data || otherData
        })
    }

    if (_method === "post") {
        if (params && data) {
            return axios({
                responseType,
                url,
                headers,
                method,
                params,
                data
            })
        } else {
            const { start, limit, ...resetData } = otherData
            return axios({
                responseType,
                url,
                headers,
                method,
                params: params || { start, limit },
                data: data || resetData
            })
        }
    }
}

export default service