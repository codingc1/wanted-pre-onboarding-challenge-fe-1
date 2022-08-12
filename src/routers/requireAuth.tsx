import { useReactiveVar } from "@apollo/client";
import { useLocation, Navigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { ROUTES } from "./route-name-constants";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    let location = useLocation();
  
    if (!isLoggedIn) {
        alert("로그아웃 되었습니다.")
      return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
    }
  
    return children;
  }

// export function RequireAuth({ children }: { children: JSX.Element }) {
//     let location = useLocation();
//     const isLoggedIn = useReactiveVar(isLoggedInVar);

//     if(isLoggedIn){
//         return children;
//     }

//     alert('로그아웃되어 이동합니다.')
//     return <Navigate to="/" state={{ from: location }} replace />;
  
// }