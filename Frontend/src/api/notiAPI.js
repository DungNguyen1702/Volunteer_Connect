import axiosClient from "./axiosClient";

const notiAPI = {
    getAllNotiByIdAccount: (id) => {
        const url = "/api/v1/notification/selectAllByAccId?id="+id;
        return axiosClient.application.get(url);
    },
    updateStatusNoti: (id, status) => {
        const url = "/api/v1/notification/update";
        return axiosClient.application.post(url,{
            id : id,
            status : status
        });
    },
};

export default notiAPI;
