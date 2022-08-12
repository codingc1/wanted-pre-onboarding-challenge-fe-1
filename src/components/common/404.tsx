import { useEffect } from "react";
import { ROUTES } from "../../routers/route-name-constants";


// import { Link } from "react-router-dom";

//<a href="/create-account" className="text-lime-600 hover:underline">회원 가입하기</a>
export const NotFound = () => {//{msg}:{msg?:string}
  
  useEffect(()=>{
    //로그아웃 func
  },[])
  return(
    <div className="h-screen flex flex-col items-center justify-center">

      <title>404 Not Found</title>

    <h2 className="font-semibold text-2xl mb-3">Page Not Found.</h2>
    <h4 className="font-medium text-base mb-5">
      The page you're looking for does not exist or has moved.
    </h4>
    <a href={ROUTES.HOME} className="hover:underline text-lime-600">Go back home &rarr;</a>

  </div>
  )

}