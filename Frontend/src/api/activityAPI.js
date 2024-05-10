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
    getActivityDetail: (id) => {
        const url = `/api/v1/activity/organization/getActivityDetail?activityId=${id}`
        return axiosClient.application.get(url)
    },
}

export default activityAPI;
