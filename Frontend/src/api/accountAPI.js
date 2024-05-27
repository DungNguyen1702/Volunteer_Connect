import axiosClient from "./axiosClient";

const accountInfoAPI = {
    getInfoByToken: () => {
        const url = "/api/v1/account/detail";
        return axiosClient.application.get(url);
    },
    updateAccount: (newAccount) => {
        const url = "/api/v1/account/update";
        return axiosClient.application.post(url, newAccount);
    },
    updatePassword: (newPassword) => {
        const url = "/api/v1/account/changePassword";
        return axiosClient.application.post(url, newPassword);
    },
    getAllAccountByAdmin: () => {
        const url = "api/v1/admin/getAllAccount";
        return axiosClient.application.get(url);
    },
    deleteAccount: (accountId, isDeleted) => {
        const url = `/api/v1/admin/deleteAccount`;
        return axiosClient.application.post(url, {
            id: accountId,
            isDeleted: isDeleted ? true : false,
        });
    },
};

export default accountInfoAPI;
