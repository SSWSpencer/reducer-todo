import React from 'react';
import ToDo from "./ToDo";

const ToDoList = props => {
    return(
        <div>
            {props.task.map(item=> (
                <ToDo item={item} key={item.id} toggleTask = {props.toggleTask}/>
            ))}
        </div>
    )
}
export default ToDoList;