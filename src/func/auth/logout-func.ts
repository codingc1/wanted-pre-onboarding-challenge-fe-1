import { NavigateFunction } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "../../apollo";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { ROUTES } from "../../routers/route-name-constants";


export const logOutFunc=(navigate: NavigateFunction)=>{
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoggedInVar(false)
    authTokenVar(null);
    navigate(ROUTES.LOGIN, { replace: true });
}