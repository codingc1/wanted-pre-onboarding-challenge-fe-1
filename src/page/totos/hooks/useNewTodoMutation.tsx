import { useMutation } from "@tanstack/react-query"
import { INewTodoInput, } from "../../../api/api-router"
import { useQueryClient } from '@tanstack/react-query'
import { newTodo } from "./newTodo"
import useResultSuccessOrErrorToast from "../../../hooks/common/useToast"
import { QUERY } from "../../../api/queryName"
import { axiosDetailErr } from "../../../api/axios-func"




export const useNewTodoMutation=()=>{
    const queryClient = useQueryClient() //https://tanstack.com/query/v4/docs/guides/query-invalidation#query-matching-with-invalidatequeries

    const { error:toastError, }  =  useResultSuccessOrErrorToast()
    const { mutate, isLoading, error,isSuccess,   } = useMutation(newTodo, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY.TODOLIST)
        },
        onError:()=>{
            toastError({message:axiosDetailErr(error)}) 
        }
      })
    const newTodoFn =({title, content}:INewTodoInput)=>{
        mutate({title, content})
    }

    return { newTodoFn, isLoading, error, isSuccess,  } 
}


