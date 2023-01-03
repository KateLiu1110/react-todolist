import React from "react";
import "../style/TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem:React.FC <TodoListItemProps>=( {todo, toggleTodo })=>{
  return (
    <>
      <ul className={todo.complete ? "complete" : undefined}>
        <input 
        type="checkbox" 
        checked={todo.complete} 
        onChange={()=> toggleTodo(todo)} />
        {todo.text}
      </ul>
    </>
  );
};

export default TodoListItem;
