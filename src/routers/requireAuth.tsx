
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../stores/hooks";
import { selectIsLogin } from "../stores/user/login-slice";

import { ROUTES } from "./route-name-constants";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isLoggedIn = useAppSelector(selectIsLogin);
  // const dispatch = useAppDispatch();
    let location = useLocation();
  
    if (!isLoggedIn) {
        alert("로그아웃 되었습니다.")
      return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
    }
  
    return children;
  }


  // type IProtectedRoute = { 
  //   when: boolean; 
  //   children: React.ReactElement;
  // } & React.ComponentProps<typeof Navigate>

  // export const ProtectedRoute = ({ when, children, ...props }: IProtectedRoute) => {
  //   return (when ? children : <Navigate {...props} /> );
  // }
  
  // type IProtectedRoute = { 
  //   when: boolean; 
  //   children: React.ReactElement;
  // } & React.ComponentProps<typeof Navigate>
  
  // const ProtectedRoute = ({ when, children, ...props }: IProtectedRoute) => {
  //   return (when ? <Navigate {...props} /> : children);
  // }

// export function RequireAuth({ children }: { children: JSX.Element }) {
//     let location = useLocation();
//     const isLoggedIn = useReactiveVar(isLoggedInVar);

//     if(isLoggedIn){
//         return children;
//     }

//     alert('로그아웃되어 이동합니다.')
//     return <Navigate to="/" state={{ from: location }} replace />;
  
// }