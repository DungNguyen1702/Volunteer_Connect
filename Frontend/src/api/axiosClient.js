import axios from 'axios'
import queryString from 'query-string'

const axiosClient = {
    
    application : axios.create({
        baseURL: 'http://localhost:8888',
        
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: (params) => queryString.stringify(params),
    }),

    applicationNoAuth : axios.create({
        baseURL: 'http://localhost:8888',
        
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: (params) => queryString.stringify(params),
    }),

    formData : axios.create({
        baseURL: process.env.API_URL,
        
        headers: {
            'content-type': 'multipart/form-data',
        },
    })
}


export default axiosClient;