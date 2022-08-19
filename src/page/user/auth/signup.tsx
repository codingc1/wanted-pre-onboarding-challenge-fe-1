import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import axios  from "axios";
import { SmLimeButton } from "../../../components/common/button/sm-lime-button";
import { APIRouter } from "../../../api/api-router";
import { authChk } from "../../../func/auth/chk-func";
import { ROUTES, } from "../../../routers/route-name-constants";
import { useLoginOut } from "../hook/useLogInOut";

type signUpResponse = {
  message: string,
  token: string,
}; 

export const SignUp =()=>{
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);


  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail( e.target.value)
  }
  const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  
  const {logInTokenBatch, } = useLoginOut()
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
    setLoading(true)
    try {
        const res = await axios.post<signUpResponse>(`${APIRouter.users.signUp}`, {
          email, password, });
        alert(res.data.message)
        await logInTokenBatch( res.data.token)
        navigate(ROUTES.HOME, { replace: true });
      } catch {
      }
      setLoading(false);
  };

    return(
        <div className="h-screen flex items-center flex-col justify-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
            <div className="w-52 mb-3 text-4xl font-mono text-center">To Do 가입</div>  
            <input className="w-full input-lime mb-3" placeholder="email" value={email} onChange={onChangeEmail}/>
            <input className={`w-full input-lime mb-3`} placeholder=" 비밀번호" type="password" value={password} onChange={onChangePassword}/>
            <div className="w-full mb-1">
                <SmLimeButton loading={loading} text={"회원가입"} submit={submit} style={{color:"bg-lime-600", hoverColor:"bg-lime-700"}}/>
            </div>

            <div className=" w-full flex justify-start items-center">
            <div>이미 회원이에요</div>
            <div className="px-2 py-2">
                <a href={ROUTES.LOGIN} className="text-lime-600 hover:underline">로그인하기</a>
            </div>
            </div>
            
            </div>
        </div>
    )
}