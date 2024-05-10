import axiosClient from './axiosClient'

const postAPI = {
    getAllPost: () => {
        const url = '/api/v1/post/guest'
        return axiosClient.applicationNoAuth.get(url)
    },
    getPostDetail: (id) => {
        const url = `/api/v1/post/postDetail?id=${id}`
        return axiosClient.applicationNoAuth.get(url)
    },
}

export default postAPI;
