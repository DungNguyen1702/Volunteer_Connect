import axiosClient from "./axiosClient";

const postAPI = {
    getAllPost: () => {
        const url = "/api/v1/guest/getAllPost";
        return axiosClient.applicationNoAuth.get(url);
    },
    getPostDetail: (id) => {
        const url = `/api/v1/post/postDetail?id=${id}`;
        return axiosClient.applicationNoAuth.get(url);
    },
    getLikedPost: () => {
        const url = `/api/v1/post/selectAllLikePost`;
        return axiosClient.application.get(url);
    },
    createPost: (newPost) => {
        const url = `/api/v1/post/create`;
        return axiosClient.application.post(url, newPost);
    },
    createADeleteLikedPost: (postId) => {
        const url = `/api/v1/post/likePost`;
        return axiosClient.application.post(url, { id: postId });
    },
    deletePost: (activityId, postId) => {
        const url = `/api/v1/post/delete`;
        return axiosClient.application.post(url, {
            id: postId,
            activityId: activityId,
        });
    },
};

export default postAPI;
