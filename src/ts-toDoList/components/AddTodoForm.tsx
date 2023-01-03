import React,{ChangeEvent, FormEvent, useState} from "react";

interface AddTodoFormProps{
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> =({addTodo})=>{
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value)
    }

    const hamdleSubmit =(e:FormEvent<HTMLButtonElement>)=>[
        e.preventDefault(), // 不要跳轉頁面，把 DOM預設功能取消
        addTodo(newTodo)
    ]

    return(
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={hamdleSubmit}>Add Todo</button>
        </form>
    )
}

export default AddTodoForm