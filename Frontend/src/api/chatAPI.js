import axiosClient from './axiosClient'

const chatApi = {
    getListChatByToken: (id) => {
        const url = `/api/v1/chat/selectAll?id=${id}`
        return axiosClient.application.get(url);
    },
}

export default chatApi;
