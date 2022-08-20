import { ITodo,  } from "../../../stores/todo-data"
import { useDeleteTodoMutation } from "../hooks/useDeleteTodoMutation"
import {BsTrash} from "react-icons/bs";

export const TodoDelButton=({todoItem}:{todoItem:ITodo})=>{

    const { deleteTodoFn, isLoading,  } = useDeleteTodoMutation()
    const deleteSubmit=async(delItem:ITodo)=>{
        const aa = window.confirm("Todo를 삭제하시겠습니까?")
        if(!aa)return
        if(isLoading)return
        deleteTodoFn(delItem)
      }

    return( //BsTrash
      <button className=" w-12 flex justify-center items-center hover:text-red-500" onClick={()=>deleteSubmit(todoItem)}>
        <BsTrash size={14} />
      </button>
    )
    
}

