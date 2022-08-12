import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APIRouter, TodoResponse } from "../../api/api-router";
import { axiosWithToken } from "../../api/axios-instance";
import { isLoggedInVar } from "../../apollo";
import { SmLimeButton } from "../../components/common/button/sm-lime-button";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { logOutFunc } from "../../func/auth/logout-func";
import { ROUTES } from "../../routers/route-name-constants";
import { todoStore } from "../../stores/todo-store/todo-store";



export const Home =()=>{
    let navigate = useNavigate();
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    const goToLogin=()=>{
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
        alert('로그아웃되어 로그인으로 이동합니다.')
        navigate(ROUTES.LOGIN, { replace: true })
    }
    useEffect(()=>{
        const init=async()=>{
            if( !isLoggedIn )goToLogin()
            try {
                const res = await axiosWithToken.get<TodoResponse>(`${APIRouter.todos.crud}` );
                todoStore.setTodos(res.data.data)
              } catch (error) {
                goToLogin()
              }
        }
        init()
    },[])

    const goTodo=()=>{
        navigate(ROUTES.TODOLIST)
    }
    const logOut=()=>{
        logOutFunc(navigate)
    }

    return(
        <div className=" min-h-screen flex items-center flex-col mt-10 lg:mt-28">
            <div className="w-full p-2 max-w-sm flex flex-col px-5 items-center font-semibold text-xl">
                ToDos Home
            </div>
            <SmLimeButton text={'To Do 보기'} submit={goTodo} style={{padding:'p-2 px-5 mt-2'}}/>
            <SmLimeButton text={'LogOut'} submit={logOut} style={{padding:'p-2 px-5 mt-2'}}/>
        </div>
    )
    
}