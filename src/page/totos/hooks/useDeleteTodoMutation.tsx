import { useMutation } from "@tanstack/react-query"
import { APIRouter, } from "../../../api/api-router"
import { useQueryClient } from '@tanstack/react-query'
import useResultSuccessOrErrorToast from "../../../hooks/common/useToast"
import { QUERY } from "../../../api/queryName"
import { axiosDetailErr } from "../../../api/axios-func"
import { axiosWithToken } from "../../../api/axios-instance"
import { ITodo } from "../../../stores/todo-data"


const deleteTodo=(delItem:ITodo)=>{
  return axiosWithToken.delete(`${APIRouter.todos.crud}/${delItem.id}`);
}

export const useDeleteTodoMutation=()=>{
    const queryClient = useQueryClient()

    const { error:toastError, } = useResultSuccessOrErrorToast()
    const { mutate, isLoading, error,isSuccess  } = useMutation(deleteTodo, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY.TODOLIST)
        },
        onError:()=>{
            toastError({message:axiosDetailErr(error)}) 
        }
      })
    const deleteTodoFn =(delItem:ITodo)=>{
        mutate(delItem)
    }

    return { deleteTodoFn, isLoading, error, isSuccess } 
}


