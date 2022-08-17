
import { useReactiveVar } from "@apollo/client";
import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routers/route-name-constants";
import { todoDataVar } from "../../stores/todo-data";
import { todoStore } from "../../stores/todo-store/todo-store";
import useGetTodoList from "./hooks/useGetTodoList";
import { TodoAdd } from "./toto-list/todo-add";
import { TodoDelButton } from "./toto-list/todo-del-button";
import { TodoUpdateModal } from "./toto-list/todo-update-modal";



export const TodoList = () => {
  let navigate = useNavigate();
  // const todoData = useReactiveVar(todoDataVar);
  
  const { data: todosList, refetch: refetchTodos } = useGetTodoList();
    useEffect(()=>{
      const init=async()=>{
        try {
          
          // const res = await axiosWithToken.get<TodoResponse>(`${APIRouter.todos.crud}` );
          // todoStore.setTodos(res.data.data)
        } catch (error) {
          // axiosDetailErr(axios, error as Error | AxiosError<unknown, any>)
        }
      }
      init()
    },[])

    const goHome=()=>navigate(ROUTES.HOME)

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full max-w-sm flex flex-col justify-center items-center">
        <div className="w-full flex justify-center  items-center mt-16" >
          <div className=" cursor-pointer" onClick={goHome}>홈</div>
          <div className="ml-2 font-semibold text-xl">Todo List</div>
        </div>
        
        <div className="w-full">
          {todosList?.data.map((el, index)=>(
            <div className="w-full flex mt-2" style={{border:'1px solid rgb(229 231 235)'}} key={index} >
              <TodoUpdateModal todoItem={el} />
                <div className="w-full " >
                    <div className='w-full ' >{el.title}</div>
                    <div className='w-full'>{el.content}</div>
                </div>
            <TodoDelButton todoItem={el} />
            </div>
          ))}
        </div>
        <TodoAdd />
      </div>
    </div>
  );
};

