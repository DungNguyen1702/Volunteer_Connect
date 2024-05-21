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
    createTaskComment: (newPostComment) => {
        const url = "/api/v1/taskcomment/create";
        return axiosClient.application.post(url, newPostComment);
    },
    updateTaskComment: (updatePostComment) => {
        const url = "/api/v1/taskcomment/update";
        return axiosClient.application.post(url, updatePostComment);
    },
    deleteTaskComment: (id) => {
        const url = `/api/v1/taskcomment/delete`;
        return axiosClient.application.post(url, {
            id: id,
        });
    },
};

export default commentAPI;
