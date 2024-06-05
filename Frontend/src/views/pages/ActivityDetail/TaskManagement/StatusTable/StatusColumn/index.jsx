import { PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import { Button } from "antd";
import TaskItem from "../Task";
import { useContext, useState } from "react";
import { TaskDataContext } from "../..";
import { useDrop } from "react-dnd";
import CreateTask from "../CreateTask";
import useAuth from "../../../../../../hooks/useAuth";

function StatusColumn(props) {
    const { updateTask, listCandidate } = useContext(TaskDataContext);

    const { statusName, keyValue, colorColumn, listTaskByStatus } = props;
    const [isCreateTask, setIsCreateTask] = useState(false);
    const onClickCreateTask = () => {
        setIsCreateTask(true);
    };

    const { account } = useAuth();

    const [{ isOver }, drop] = useDrop({
        accept: "taskItem",
        drop: (item) =>
            updateTask(item.taskTableId, item.id, {
                ...item,
                status: parseInt(keyValue),
            }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div class="status-column-wrapper" ref={drop}>
            <div
                class="status-column-header"
                style={{ backgroundColor: colorColumn }}
            >
                <h1 class="status-column-name">{statusName}</h1>
                {account && account.role === 2 && (
                    <Button
                        className="status-column-button-create-task"
                        onClick={onClickCreateTask}
                        icon={<PlusOutlined style={{ fontSize: "20px" }} />}
                        style={{ background: colorColumn }}
                    />
                )}
                {isCreateTask && (
                    <CreateTask
                        setIsCreateTask={setIsCreateTask}
                        isCreateTask={isCreateTask}
                        listCandidate={listCandidate}
                        statusColumn={keyValue}
                    />
                )}
            </div>
            <div class="status-column-task-holder">
                {listTaskByStatus.map((task) => (
                    <TaskItem taskInfo={task} colorStatus={colorColumn} />
                ))}
            </div>
        </div>
    );
}

export default StatusColumn;
