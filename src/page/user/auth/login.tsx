import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "../../../apollo"
import { LOCALSTORAGE_TOKEN } from "../../../constants"
import axios, { AxiosError } from "axios";
import { SmLimeButton } from "../../../components/common/button/sm-lime-button";
import { APIRouter, LoginResponse } from "../../../api/api-router";
import { axiosDetailErr } from "../../../api/axios-func";
import { authChk } from "../../../func/auth/chk-func";
import { ROUTES } from "../../../routers/route-name-constants";
import useLoginMutation from "../../../hooks/query/useLogin";
import useResultSuccessOrEorrorToast from "../../../hooks/common/useToast";

export const Login =()=>{
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isLoading  , setLoading] = useState(false);


  useEffect(()=>{
    const reset =async()=>{
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
      authTokenVar(null)
      isLoggedInVar(false)
    }
    reset()
  },[])

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail( e.target.value)
  }
  const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }


  const { error:toastError, }  =  useResultSuccessOrEorrorToast()
  const { mutate:loginMutate, isLoading } = useLoginMutation({
    onSuccess: () => { //loginData
      // success({message:loginData.message, onClose:()=> navigate(ROUTES.HOME, { replace: true }) })
      navigate(ROUTES.HOME, { replace: true });
    },
    onError: (error) => {
      toastError({message:axiosDetailErr(error)}) 
    },
  });
  const submit = async() => {
    const emailCheckResult = authChk.chkEmail(email)
    if(emailCheckResult){
        alert(emailCheckResult); 
        return;
    }
    const passCheckResult = authChk.chkPassword(password)
    if(passCheckResult){
        alert(passCheckResult); 
        return;
    }

    loginMutate({email, password})

  };

    return( // style={{color:"bg-lime-600", hoverColor:"bg-lime-700"}}
        <div className="h-screen flex items-center flex-col justify-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
                <div className="w-52 mb-3 text-4xl font-mono text-center">To Do</div>  
                <input className="w-full input-lime mb-3" placeholder="email" value={email} onChange={onChangeEmail}/>
                <input className={`w-full input-lime mb-3`} placeholder=" 비밀번호" type="password" value={password} onChange={onChangePassword}/>
                <div className="w-full mb-1">
                    <SmLimeButton loading={isLoading} text={"로그인"} submit={submit}  />
                </div>

                <div className=" w-full flex justify-start items-center">
                    <div>ToDo가 처음이세요?</div>
                    <div className="px-2 py-2">
                        <a href={ROUTES.SIGNUP} className="text-lime-600 hover:underline">회원 가입하기</a>
                    </div>
                </div>
            
            </div>
        </div>
    )
}