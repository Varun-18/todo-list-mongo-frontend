import axios from 'axios'
import { baseurl } from '../constants'

const axiosInstance = axios.create({
    baseURL: baseurl,
    withCredentials: true,
})

export default class API {
    static async get({ url }) {
        return axiosInstance.get(url)
    }

    static async post({ url, data }) {
        console.log(url, data)
        return axiosInstance.post(url, data)
    }

    static async put({ url, data }) {
        return axiosInstance.put(url, data)
    }

    static async delete({ url, data }) {
        console.log(url, data)
        return axiosInstance.delete(url, data)
    }
}
