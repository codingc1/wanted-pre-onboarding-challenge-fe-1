import { useReactiveVar } from "@apollo/client"
import axios, { AxiosError } from "axios"
import { APIRouter,  } from "../../../api/api-router"
import { axiosDetailErr, } from "../../../api/axios-func"
import { axiosWithToken } from "../../../api/axios-instance"
import { ITodo, todoDataVar } from "../../../stores/todo-data"
import { todoStore } from "../../../stores/todo-store/todo-store"
import { arrayUtils } from "../../../utils/arrayUtils"


export const TodoDelButton=({todoItem}:{todoItem:ITodo})=>{
    const todoData = useReactiveVar(todoDataVar);

    const deleteSubmit=async(delItem:ITodo)=>{
        const aa = window.confirm("Todo를 삭제하시겠습니까?")
        if(!aa)return
        try {
          await axiosWithToken.delete(`${APIRouter.todos.crud}/${delItem.id}`);
          const index =arrayUtils.IndexOfId(todoData.todoData, delItem.id) 
          const newArr = arrayUtils.arrayClone(todoData.todoData)
          newArr.splice(index, 1)
          todoStore.setTodos(newArr)
        } catch (error) {
          axiosDetailErr(axios, error as Error | AxiosError<unknown, any>)
        }
      }

    return<button className=" w-12 flex justify-center items-center bg-lime-300" onClick={()=>deleteSubmit(todoItem)}>삭제</button>
}