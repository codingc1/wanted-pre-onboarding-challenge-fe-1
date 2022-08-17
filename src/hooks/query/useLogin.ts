import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ApiUser, ILoginInput, LoginResponse } from "../../api/api-router";

const useLoginMutation = (
    options?: UseMutationOptions<LoginResponse, Error, ILoginInput>
  ) => {
    return useMutation<LoginResponse, Error, ILoginInput>(
      ApiUser.login, options
    );
    // const res =  useMutation<LoginResponse, Error, ILoginInput>(
    //   ApiUser.login, options
    // );
    // if(res.data?.token){
    //   const data = res.data
    //   alert(data.message)
    //   localStorage.setItem(LOCALSTORAGE_TOKEN,data.token);
    //   authTokenVar(data.token);
    //   isLoggedInVar(true)
    //   alert('succ')
    // }else{
    //   alert('토큰 없습니다')
    // }
      
    // return res
  };
  
  export default useLoginMutation;