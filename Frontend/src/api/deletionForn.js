import axiosClient from "./axiosClient";

const deletionForm = {
    getAllDeletionForm: () => {
        const url = '/api/v1/deleteActivityForm/selectAll'
        return axiosClient.application.get(url)
    }
}
export default deletionForm;