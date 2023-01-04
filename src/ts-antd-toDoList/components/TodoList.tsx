import React from "react";
import {List} from 'antd'

export const TodoList=()=>{
    return(
        <List
        header={<div>ToDoList</div>}
        renderItem={(item)=>(
    
        )}
        pagination={{
            position: 'bottom',
            pageSize: 10
        }}
        />
    )

}