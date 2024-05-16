import axiosClient from './axiosClient'

const applyFormAPI = {
    getAllApplyFormByActivityID: (id) => {
        const url = `/api/v1/registrationform/selectRegistrationFormActivityId?id=${id}`
        return axiosClient.application.get(url)
    },
}

export default applyFormAPI;
