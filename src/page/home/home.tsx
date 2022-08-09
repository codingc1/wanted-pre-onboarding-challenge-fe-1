import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "../../apollo";
import { SmLimeButton } from "../../components/common/button/sm-lime-button";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { logOutFunc } from "../../func/auth/logout-func";
import { LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";



export const Home =()=>{
    let navigate = useNavigate();
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    useEffect(()=>{
        if( !isLoggedIn ){
            alert('로그인되지 않았습니다.')
            navigate(LOGIN_ROUTE_NAME, { replace: true })
        }
    },[])
    const submit=()=>{
        logOutFunc(navigate)
    }

    return(
        <div className=" min-h-screen flex items-center flex-col mt-10 lg:mt-28">
            <div className="w-full p-2 max-w-sm flex flex-col px-5 items-center font-semibold text-xl">
            ToDos Home
            </div>
            <SmLimeButton text={'To Do 보기'} submit={submit} style={{padding:'p-2 px-5 mt-2'}}/>
            <SmLimeButton text={'LogOut'} submit={submit} style={{padding:'p-2 px-5 mt-2'}}/>
            {/* <div className="w-full max-w-sm p-2 flex flex-col px-5 items-center bg-lime-300 cursor-pointer" onClick={submit}>
                LogOut
            </div> */}
        </div>
    )
    
}