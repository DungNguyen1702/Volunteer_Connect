import axiosClient from './axiosClient'

const chatApi = {
    getListChatByToken: () => {
        const url = '/api/v1/chat/selectAll'
        return axiosClient.application.get(url);
    },
}

export default chatApi;
