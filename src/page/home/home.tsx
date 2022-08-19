
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SmLimeButton } from "../../components/common/button/sm-lime-button";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { ROUTES } from "../../routers/route-name-constants";
import { useAppSelector } from "../../stores/hooks";
import { selectIsLogin } from "../../stores/user/login-slice";
import { useLoginOut } from "../user/hook/useLogInOut";

export const Home =()=>{
    let navigate = useNavigate();
    
    const isLogin = useAppSelector(selectIsLogin);

    const { logOutokenBatch} = useLoginOut()
    const goToLogin=()=>{
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
        alert('로그아웃되어 로그인으로 이동합니다.')
        navigate(ROUTES.LOGIN, { replace: true })
    }
    useEffect(()=>{
        if( !isLogin )goToLogin()
    },[])

    const goTodo=()=>{
        navigate(ROUTES.TODOLIST)
    }
    const logOut=()=>{
        logOutokenBatch()
        navigate(ROUTES.LOGIN, { replace: true })
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

