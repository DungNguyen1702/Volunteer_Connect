import axiosClient from './axiosClient'

const postAPI = {
    getAllPost: () => {
        const url = '/api/v1/post/select'
        return axiosClient.applicationNoAuth.get(url)
    },
}

export default postAPI;