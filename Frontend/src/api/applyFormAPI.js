import axiosClient from './axiosClient'

const applyFormAPI = {
    getAllApplyFormByActivityID: (id) => {
        const url = `/api/v1/registrationform/selectRegistrationFormActivityId?id=${id}`
        return axiosClient.application.get(url)
    },
    updateApproveStatusApplyForm: (applyFormId, isConfirmed, actId) => {
        console.log(applyFormId, isConfirmed, actId)
        const url = `/api/v1/registrationform/aprove`
        return axiosClient.application.post(url, {
            id : applyFormId,
            isConfirmed : isConfirmed,
            activityId : actId
        })
    },
}

export default applyFormAPI;
