import axiosClient from "./axiosClient";

const commentAPI = {
    createPostComment: (newPostComment) => {
        const url = "/api/v1/postcomment/create";
        return axiosClient.application.post(url, newPostComment);
    },
    updatePostComment: (updatePostComment) => {
        const url = "/api/v1/postcomment/update";
        return axiosClient.application.post(url, updatePostComment);
    },
    deletePostComment: (id, postId) => {
        const url = `/api/v1/postcomment/delete`;
        return axiosClient.application.post(url, {
            id: id,
            postId: postId,
        });
    },
};

export default commentAPI;
