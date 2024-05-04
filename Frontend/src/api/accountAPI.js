import axiosClient from './axiosClient'

const accountInfoAPI = {
    getInfoByToken: () => {
        const url = '/api/v1/account/detail'
        return axiosClient.application.get(url)
    },
}

export default accountInfoAPI;