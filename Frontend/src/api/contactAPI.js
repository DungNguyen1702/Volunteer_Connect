import axiosClient from './axiosClient'

const contactAPI = {
    getAllCandidate: () => {
        const url = '/api/v1/guest/getAllCandidate'
        return axiosClient.applicationNoAuth.get(url);
    },
    getAllOrganization: () => {
        const url = '/api/v1/guest/getAllOrganization'
        return axiosClient.applicationNoAuth.get(url);
    },
    getContactDetail: (id, role) => {
        const url = `/api/v1/guest/getContact?id=${id}&role=${role}`
        return axiosClient.applicationNoAuth.get(url);
    }
}

export default contactAPI;
