import activityAPI from './activityAPI'
import axiosClient from './axiosClient'

const applyFormAPI = {
    getAllApplyFormByActivityID: (id) => {
        const url = `/api/v1/registrationform/selectRegistrationFormActivityId?id=${id}`
        return axiosClient.application.get(url)
    },
    updateApproveStatusApplyForm: (applyFormId, isConfirmed, actId, userId) => {
        const url = `/api/v1/registrationform/aprove`
        return axiosClient.application.post(url, {
            id : applyFormId,
            isConfirmed : isConfirmed,
            activityId : actId,
            userId : userId,
        })
    },
    createApplyForm : (activityId)=>{
        const url = `/api/v1/registrationform/create`
        return axiosClient.application.post(url, {
            activityId : activityId
        })
    }
}

export default applyFormAPI;
