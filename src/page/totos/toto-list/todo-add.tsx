import { useState } from "react"
import { useNewTodoMutation } from "../hooks/useNewTodoMutation"

export const TodoAdd=()=>{
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle( e.target.value)
      }
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent( e.target.value)
    }
   
    const  { newTodoFn, isLoading,  }  = useNewTodoMutation()
    const submit=async()=>{
        if(isLoading)return;
        newTodoFn({title, content})
        }
    
    return(
        <div className="w-full mt-4">
            <div className="w-full flex " >
                <div className="w-full " style={{flex:1}}>
                    <input className='w-full input-lime' placeholder="title" value={title} onChange={onChangeTitle}  />
                    <textarea className='w-full input-lime' style={{resize:'none'}} placeholder="content" value={content} onChange={onChangeContent}  />
                </div>
                <button className=" w-12 flex justify-center items-center bg-lime-300" onClick={submit}>추가</button>
            </div>
            
        </div>
    )
}

//style={{border:'1px solid rgb(229 231 235)'}}
        // try {
        //     if(isLoading)return;

            
        //     mutate({title, content})
        //     const res = await axiosWithToken.post<TodoResponseOneTodo>(`${APIRouter.todos.crud}`, {
        //             title,content
        //         });

        //     if(res.data){
        //         refetch()   
        //         setTitle('')
        //         setContent('')
        //     } 
        //   } catch (error) {
        //     toastError({message:axiosDetailErr(error)}) 
        //   }