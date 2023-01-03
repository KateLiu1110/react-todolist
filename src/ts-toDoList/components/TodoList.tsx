import React from "react";
import TodoListItem from './TodoListItem'

interface TodoListProps{
    todos:Array<Todo>;
    toggleTodo: ToggleTodo;
}

const TodoList:React.FC<TodoListProps> =({todos, toggleTodo})=>{
    return(
        <ul>
            {
                todos.map((item: any)=>{
                    return <TodoListItem todo={item} toggleTodo={toggleTodo}/>
                })
            }
        </ul>
    )
}

export default TodoList