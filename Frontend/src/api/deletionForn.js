import axiosClient from "./axiosClient";

const deletionForm = {
    getAllDeletionForm: () => {
        const url = "/api/v1/admin/selectAllDeleteForm"
        return axiosClient.application.get(url);
    },
    createDeletionForm : (actId, reason)=>{
        const url= "/api/v1/deleteActivityForm/create"
        return axiosClient.application.post(url,{
            activityId : actId,
            reason :  reason
        });        
    },
    updateDeletionForm : (actId, isAccept)=>{
        const url= "/api/v1/admin/updateDeleteForm"
        return axiosClient.application.post(url,{
            id : actId,
            isAccept :  isAccept
        });        
    }
};
export default deletionForm;
