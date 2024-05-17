import axiosClient from "./axiosClient";

const candidateAPI = {
    updateCandidate: (id, newCandidate) => {
        const url = "/api/v1/candidate/update";
        return axiosClient.application.post(url, { id: id, ...newCandidate });
    },
    getAllCertificate: () => {
        const url = "/api/v1/account/selectAllCertificate";
        return axiosClient.application.get(url);
    },
    deleteCandidate: (candidateId, actId) => {
        const url = `/api/v1/candidate/delete`;
        return axiosClient.application.post(url, {
            id: candidateId,
            activityId: actId,
        });
    },
};

export default candidateAPI;
