import axiosClient from './axiosClient'

const accountInfoAPI = {
    getInfoByToken: () => {
        const url = '/api/user/profile'
        return axiosClient.application.get(url)
    },
}

export default accountInfoAPI;