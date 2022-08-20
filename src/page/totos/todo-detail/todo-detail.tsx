import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Outlet } from "react-router-dom";
import { ApiUser } from "../../../api/api-router";
import { QUERY } from "../../../api/queryName";
import { ITodo } from "../../../stores/todo-data";

// export interface IBoardsView {
//     id: string;
//   }

export const TodoDetail=()=>{
    const {todoId} = useParams();

    const queryKeyGetTodoById = [QUERY.TODOLIST, 'getOne'] 
    type ApiGetTodoById = ITodo;
    const  getTodoById=async(id: string | undefined)=> {
        if (!id) {
            return Promise.reject()
         }
        const {data} =await ApiUser.todo.getTodoById(id) ;
        return data;
      }

      const { data } = useQuery<ApiGetTodoById>([...queryKeyGetTodoById, todoId], () => getTodoById(todoId, ),{
        enabled:!!todoId
        } )

    // if(data){
    //     console.log(data, 'detail data')
    // }


    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
                {data && <div className="w-full flex justify-center  items-center mt-3" >
                    <div className="ml-2 font-semibold text-xl">{data.title}</div>
                </div>}
            <div className="w-full">    
            {data && <div className="w-full flex mt-2 " style={{border:'1px solid rgb(229 231 235)', }}>
              
              <div className="w-full " >
                  <div className="w-full flex">
                    <div className='w-full p-3'>{data.content}</div>
                  </div>
              </div>
              <div ></div>
                
            </div>}
            </div>
            </div>

        </div>
    )
}