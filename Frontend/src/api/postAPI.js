import axiosClient from './axiosClient'

const postAPI = {
    getAllPost: () => {
        const url = 'api/v1/guest/getAllPost'
        return axiosClient.applicationNoAuth.get(url)
    },
    getPostDetail: (id) => {
        const url = `/api/v1/post/postDetail?id=${id}`
        return axiosClient.applicationNoAuth.get(url)
    },
    getLikedPost: () => {
        const url = `/api/v1/post/selectAllLikePost`
        return axiosClient.application.get(url)
    },
}

export default postAPI;
