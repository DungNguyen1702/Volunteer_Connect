import "./index.scss";
import FakeData from "../../../../data/fake_data.json";
import TaskTableItem from "./TaskTable";
import { Avatar, Button, Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createContext, useContext, useEffect, useState } from "react";
import StatusTable from "./StatusTable";
import AvatarAccount from "../../../../components/avatar/AvatarAccount";
import { ActivityDetailContext } from "..";
import useDropDownListTaskItem from "./DropDown";
import TextArea from "antd/es/input/TextArea";
import TaskDetail from "./StatusTable/TaskDetail";

export const TaskDataContext = createContext();

function TaskManagement() {
    const { listCandidate } = useContext(ActivityDetailContext);

    const [data, setData] = useState(FakeData.TableTasks);
    const [search, setSearch] = useState("");
    const [createTask, setCreateTask] = useState(false);
    const [showingTaskTableID, setShowingTaskTableID] = useState(data[0].id);

    const [showListTask, setShowListTask] = useState(data.find((task) => task.id === showingTaskTableID)?.Tasks || []);
    const [listTaskSearch, setListTaskSearch] = useState(showListTask);
    
    const {getItemDropDownSearchTask} = useDropDownListTaskItem();

    useEffect(()=>{
        setShowListTask(data.find((task) => task.id === showingTaskTableID)?.Tasks || [])
    },[showingTaskTableID, data])        

    useEffect(()=>{
        if(search.length !== 0)
            setListTaskSearch(showListTask.filter(task => task.title.toLowerCase().includes(search.toLowerCase())));
        else
            setListTaskSearch(showListTask);
    },[showListTask, search]);

    const onClickCreateTask = () => {
        setCreateTask(!createTask);
    };
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };
    const updateTask = (taskTableId, taskItemId, newTask) => {
        const updatedData = data.map((taskTable) => {
            if (taskTable.id === taskTableId) {
                return {
                    ...taskTable,
                    Tasks: taskTable.Tasks.map((task) => {
                        if (task.id === taskItemId)
                            return { ...task, ...newTask };
                        return task;
                    }),
                };
            }
            return taskTable;
        });
        setData(updatedData);
    };
    const addTask = (taskTableId, newTask) => {
        const newData = data.map((taskTable) => {
            if (taskTable.id === taskTableId)
                return { ...taskTable, Tasks: [...taskTable.Tasks, newTask] };
            return taskTable;
        });
        setData(newData);
    };
    const addTaskTable = (newTaskTable) => {
        setData([...data, newTaskTable]);
    };

    // Search support
    const [visibleDetail, setVisibleDetail] = useState(false);
    const [searchingTask, setSearchingTask] = useState(null);
    const onClickItem = (task)=>{
        setSearchingTask(task);
        setVisibleDetail(true);
    };
    
    const onCloseModal = ()=>{
        setVisibleDetail(false);
    }

    return (
        <TaskDataContext.Provider
            value={{
                listCandidate,
                updateTask,
                showingTaskTableID,
                addTask,
                addTaskTable,
            }}
        >
            <div class="task-management-wrapper">
                <div class="task-management-tabbar-wrapper">
                    {data.map((taskTable) => (
                        <TaskTableItem
                            data={taskTable}
                            setData={setData}
                            listData={data}
                            setShowingTaskTableID={setShowingTaskTableID}
                            showingTaskTableID={showingTaskTableID}
                        />
                    ))}
                    {createTask ? (
                        <div class="task-management-create-area">
                            <TaskTableItem
                                isCreate={true}
                                setData={setData}
                                listData={data}
                                setCreateTask={setCreateTask}
                            />
                            <Button
                                className="task-management-create-button"
                                onClick={onClickCreateTask}
                                icon={
                                    <PlusOutlined
                                        style={{ fontSize: "20px" }}
                                    />
                                }
                            >
                                <h3>Cancel</h3>
                            </Button>
                        </div>
                    ) : (
                        <Button
                            className="task-management-create-button"
                            onClick={onClickCreateTask}
                            icon={<PlusOutlined style={{ fontSize: "20px" }} />}
                        >
                            <h3>Create task table</h3>
                        </Button>
                    )}
                </div>
                <div class="task-management-content-wrapper">
                    <div class="task-management-content-header">
                        <Dropdown
                            menu={{
                                items: getItemDropDownSearchTask(listTaskSearch, onClickItem),
                            }}
                            trigger={["click"]}
                            placement="bottom"
                            className="asdasdas"
                        >
                            <TextArea
                                placeholder="Input name's task to search"
                                onChange={onChangeSearch}
                                value={search}  
                                size="large"
                                className="task-management-search-input"
                                autoSize={{ minRows: 1, maxRows: 1 }}
                            />
                        </Dropdown> 
                        
                        <Avatar.Group
                            maxCount={3}
                            maxStyle={{
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                            }}
                            size="large"
                        >
                            {listCandidate.map((candidate) => (
                                <>
                                    <AvatarAccount
                                        name={candidate.user.account.name}
                                        avatar={candidate.user.account.avatar}
                                        backgroundNoAva={
                                            candidate.user.account
                                                .backgroundNoAva
                                        }
                                    />
                                </>
                            ))}
                        </Avatar.Group>
                        {visibleDetail && <TaskDetail
                            onCloseModal={onCloseModal}
                            visibleDetail={visibleDetail}
                            taskInfo={searchingTask}
                        />}
                    </div>

                    <StatusTable listTask={showListTask} />
                </div>
            </div>
        </TaskDataContext.Provider>
    );
}

export default TaskManagement;
