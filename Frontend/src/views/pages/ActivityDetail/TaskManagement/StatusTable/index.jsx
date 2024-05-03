import "./index.scss";
import {
    TASK_STATUS,
    TASK_STATUS_COLOR,
} from "../../../../../constants/task_status";
import StatusColumn from "./StatusColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function StatusTable(props) {
    const { listTask } = props;

    return (
        <DndProvider backend={HTML5Backend}>
            <div class="status-table-wrapper">
                {Object.entries(TASK_STATUS).map(([key, value]) => (
                    <StatusColumn
                        statusName={value}
                        keyValue={key}
                        colorColumn={TASK_STATUS_COLOR[key]}
                        listTaskByStatus={listTask.filter(
                            (task) => task.status === parseInt(key)
                        )}
                    />
                ))}
            </div>
        </DndProvider>
    );
}

export default StatusTable;
