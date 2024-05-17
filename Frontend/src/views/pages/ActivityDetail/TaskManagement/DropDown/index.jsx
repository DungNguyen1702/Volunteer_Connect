import SupportFunction from '../../../../../support/support_function';
import("./index.scss");

const useDropDownListTaskItem = ()=>{

    const getItemDropDownSearchTask = (taskList, onClickItem)=>{
    
        return taskList.map(task => ({
            key : task.id,
            label : (
                <div 
                    class='search-task-item-wrapper' 
                    onClick={()=>onClickItem(task)}
                >
                   <h3 class='search-task-item-title'>{task.title}</h3>
                   <p class='search-task-item-description'>{task.description && SupportFunction.TruncateText(task.description, 400)}</p> 
                   <p class='search-task-item-created-at'>{task.createdAt}</p>
                </div>
            )
        }));
    }

    return { getItemDropDownSearchTask}
}

export default useDropDownListTaskItem;
