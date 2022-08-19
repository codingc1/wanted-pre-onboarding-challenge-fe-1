import { useNavigate } from "react-router-dom";
import { LOCALSTORAGE_TOKEN } from "../../../constants";
import { ROUTES } from "../../../routers/route-name-constants";
import { useAppDispatch } from "../../../stores/hooks";
import { logInRedux, logOutRedux } from "../../../stores/user/login-slice";




export const useLoginOut=()=>{
    const dispatch = useAppDispatch();

    const logInTokenBatch=(token:string):Promise<string|null>=>{
        return new Promise((resolve,) => {
            if(!token){
                alert('not have token')
                resolve(null)
            }else{
                localStorage.setItem(LOCALSTORAGE_TOKEN, token);
                dispatch(logInRedux)
                resolve(token)
                // navigate(ROUTES.HOME, { replace: true });
            }
            
        })

    }

    const logOutokenBatch=():Promise<boolean>=>{
        return new Promise((resolve,) => {
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
        dispatch(logOutRedux)
        resolve(true)
        // navigate(ROUTES.LOGIN, { replace: true });
        })
    }
    

    return {logInTokenBatch, logOutokenBatch}

}