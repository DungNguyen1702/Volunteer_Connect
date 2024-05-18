import axiosClient from "./axiosClient";

const deletionForm = {
    getAllDeletionForm: () => {
        const url = '/api/v1/admin/selectAllDeleteForm'
        return axiosClient.application.get(url)
    }
}
export default deletionForm;