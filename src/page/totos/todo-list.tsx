
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routers/route-name-constants";
import useGetTodoList from "./hooks/useGetTodoList";
import { TodoAdd } from "./toto-list/todo-add";
import { TodoDelButton } from "./toto-list/todo-del-button";
import { TodoUpdateModal } from "./toto-list/todo-update-modal";



export const TodoList = () => {
  let navigate = useNavigate();
  // const todoData = useReactiveVar(todoDataVar);
  
  const { data: todosList, } = useGetTodoList();


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
            <div className="w-full flex mt-2 " style={{border:'1px solid rgb(229 231 235)', }} key={index} >
              
              <div className="w-full " >
                  <div className="w-full h-8 flex items-center align-middle">
                    <TodoUpdateModal todoItem={el} />
                    <div className='w-full h-full hover:text-blue-400 cursor-pointer'
                      onClick={()=>navigate(ROUTES.TODOLIST+'/'+String(el.id),)}
                    >{el.title}</div>
                  </div>
                  <div className="w-full h-8 flex">
                    <div className="w-8"></div>
                    <div className='w-full '>{el.content}</div>
                  </div>
              </div>
              <div ></div>
            <TodoDelButton todoItem={el} />
            </div>
          ))}
        </div>
        <TodoAdd />
      </div>
    </div>
  );
};

