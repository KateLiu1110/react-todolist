import { TODO_ACTION_TYPES } from "../constant/todo.constants";
import { ITodo } from "../todo.model";

interface IAddTodoAction {
    type: typeof TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: ITodo
}