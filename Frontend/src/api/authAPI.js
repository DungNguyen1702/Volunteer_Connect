import axiosClient from "./axiosClient";

const authAPI = {
    login: async (credentials) => {
        const url = "/api/v1/auth/login";
        return await axiosClient.applicationNoAuth.post(url, credentials);
    },
    register: async (user) => {
        const url = "/api/v1/auth/register";
        return await axiosClient.applicationNoAuth.post(url, user);
    },
    sendForgotPassword: async (email) => {
        const url = "/api/v1/mail/sendResetPassword/" + email;
        return await axiosClient.applicationNoAuth.get(url);
    },
    resetPassword: async (token, newPassword) => {
        const url = "/api/v1/auth/resetPassword";
        return await axiosClient.applicationNoAuth.post(url, {
            token: token,
            newPassword: newPassword,
        });
    },
};

export default authAPI;
