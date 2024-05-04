import axiosClient from './axiosClient'

const auth = {
    login: async (credentials) => {
        const url = '/api/v1/auth/login'
        return await axiosClient.application.post(url,credentials)
    },
    register : async(user)=>{
        const url = '/api/auth/register'
        return await axiosClient.application.post(url, user)
    }
}

export default auth