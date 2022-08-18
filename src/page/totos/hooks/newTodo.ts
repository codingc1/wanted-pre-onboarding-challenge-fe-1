import { APIRouter, INewTodoInput, TodoResponseOneTodo } from "../../../api/api-router"
import { axiosWithToken } from "../../../api/axios-instance"



export const newTodo=({title,content}:INewTodoInput)=>{
        return axiosWithToken.post<TodoResponseOneTodo>(`${APIRouter.todos.crud}`, {
            title,content
        })
    }

