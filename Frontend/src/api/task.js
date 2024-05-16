import axiosClient from "./axiosClient";

const taskAPI = {
    getAllTaskByActId: (actId) => {
        const url = `/api/v1/tabletask/selectTableTaskActivityId?id=${actId}`;
        return axiosClient.application.get(url);
    },
    createTaskTable: (newTaskTable, actId) => {
        const url = `/api/v1/tabletask/create`;
        return axiosClient.application.post(url, {
            ...newTaskTable,
            activityId: actId,
        });
    },
    updateTaskTable: (updateTaskTable, id, actId) => {
        const url = `/api/v1/tabletask/update`;
        return axiosClient.application.post(url, {
            ...updateTaskTable,
            id: id,
            activityId: actId,
        });
    },
    deleteTaskTable : (taskTableId, actId)=>{
        const url = `/api/v1/tabletask/delete`;
        return axiosClient.application.post(url, {
            id : taskTableId,
            activityId: actId
        });
    }
};

export default taskAPI;
