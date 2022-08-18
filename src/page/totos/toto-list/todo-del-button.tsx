import { ITodo,  } from "../../../stores/todo-data"
import { useDeleteTodoMutation } from "../hooks/useDeleteTodoMutation"

export const TodoDelButton=({todoItem}:{todoItem:ITodo})=>{

    const { deleteTodoFn, isLoading,  } = useDeleteTodoMutation()
    const deleteSubmit=async(delItem:ITodo)=>{
        const aa = window.confirm("Todo를 삭제하시겠습니까?")
        if(!aa)return
        if(isLoading)return
        deleteTodoFn(delItem)
      }

    return<button className=" w-12 flex justify-center items-center bg-lime-300" onClick={()=>deleteSubmit(todoItem)}>삭제</button>
}

