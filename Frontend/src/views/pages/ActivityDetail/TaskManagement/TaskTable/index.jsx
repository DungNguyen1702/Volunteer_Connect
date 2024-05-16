import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Button, ColorPicker } from "antd";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { TaskDataContext } from "..";

function TaskTableItem(props) {
    const { data, isCreate, setData, setCreateTask, listData, setShowingTaskTableID, showingTaskTableID } = props;
    const { addTaskTable, updateTaskTable } = useContext(TaskDataContext);
    
    const [color, setColor] = useState(isCreate ? "#257769" : data.color);
    const [isEdit, setIsEdit] = useState(isCreate ? true : false);
    const [name, setName] = useState(isCreate ? "" : data.name);

    useEffect(()=>{
        updateTaskTable({color : color, name : name}, data.id);
    },[color, name, updateTaskTable, data])

    const onClickChange = () => {
        setIsEdit(!isEdit);
    };
    const onClickConfirm = () => {
        if (isCreate) {
            addTaskTable({name : name, color : color, Tasks : []});
            setCreateTask(false)
        } else {
            setIsEdit(!isEdit);
        }
    };
    const onChangeColor = (color)=>{
        setColor(color);
    }
    const onChangeInputName = (e) => {
        setName(e.target.value);
    };
    const onClickDelete = ()=>{
        setData(listData.filter(item => item.id !== data.id));
    };
    const onClickTaskTableItem = ()=>{
        setShowingTaskTableID(data.id)
        console.log(data.id)
    }

    return (
        <div 
            class={`task-table-item-wrapper ${!isCreate && showingTaskTableID === parseInt(data.id) ? 'showing-task-table' : null}`} 
            style={{ backgroundColor: color }}
            onClick={isCreate ? null : onClickTaskTableItem}
        >
            {isEdit ? (
                <input
                    type="text"
                    value={name}
                    id="task-table-item-input-name"
                    onChange={onChangeInputName}
                />
            ) : (
                <h3
                    id="task-table-item-name"
                    style={{
                        color: color !== "#ffffff" ? "#ffffff" : "#000000",
                    }}
                >
                    {name}
                </h3>
            )}
            <div id="task-table-button-container">
                <ColorPicker
                    value={color}
                    format="hex"
                    onChange={(color) => onChangeColor(color.toHexString())}
                    className="task-table-item-color-picker"
                />
                {isEdit ? (
                    <Button
                        className="task-table-item-button"
                        onClick={onClickConfirm}
                        icon={
                            <CheckOutlined
                                style={{
                                    color:
                                        color !== "#ffffff"
                                            ? "#ffffff"
                                            : "#000000",
                                    fontSize: "23px",
                                }}
                            />
                        }
                        style={{ backgroundColor: color }}
                    />
                ) : (
                    <>
                    <Button
                        className="task-table-item-button"
                        onClick={onClickChange}
                        icon={
                            <EditOutlined
                                style={{
                                    color:
                                        color !== "#ffffff"
                                            ? "#ffffff"
                                            : "#000000",
                                    fontSize: "23px",
                                }}
                            />
                        }
                        style={{ backgroundColor: color }}
                    />
                    <Button
                        className="task-table-item-button"
                        onClick={onClickDelete}
                        icon={
                            <DeleteOutlined
                                style={{
                                    color:
                                        color !== "#ffffff"
                                            ? "#ffffff"
                                            : "#000000",
                                    fontSize: "23px",
                                }}
                            />
                        }
                        style={{ backgroundColor: color }}
                    />
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskTableItem;
