import axiosClient from './axiosClient'

const activityAPI = {
    getAllActivityByCandidate: () => {
        const url = '/api/v1/activity/candidate/selectAllActivity'
        return axiosClient.application.get(url)
    },
    getAllActivityByOrganization: () => {
        const url = '/api/v1/activity/organization/getAllActivity'
        return axiosClient.application.get(url)
    },
    getAllActivityByAdmin: () => {
        const url = '/api/v1/activity/admin/getAllActivity'
        return axiosClient.application.get(url)
    },
    getActivityDetail: (id) => {
        const url = `/api/v1/activity/getActivityDetail?activityId=${id}`
        return axiosClient.application.get(url)
    },
    createActivity : (newAct)=>{
        const url = `/api/v1/activity/organization/create`
        return axiosClient.application.post(url, newAct)
    },
    updateActivity : (updateAct)=>{
        const url = `/api/v1/activity/organization/update`
        return axiosClient.application.post(url, updateAct)
    },
}

export default activityAPI;
