import { NavigateFunction } from "react-router-dom";
import { authTokenVar } from "../../apollo";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import { LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";



export const logOutFunc=(navigate: NavigateFunction)=>{
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    authTokenVar(null);
    navigate(LOGIN_ROUTE_NAME, { replace: true });
}