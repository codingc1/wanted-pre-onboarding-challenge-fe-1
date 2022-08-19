import { LOCALSTORAGE_TOKEN } from "../../../constants";
import { useAppDispatch } from "../../../stores/hooks";
import { logInRedux, logOutRedux } from "../../../stores/user/login-slice";


export const useLoginOut=()=>{
    const dispatch = useAppDispatch();

    const logInTokenBatch=(token:string)=>{ 
            if(!token){
                alert('not have token')
            }else{
                localStorage.setItem(LOCALSTORAGE_TOKEN, token);
                dispatch(logInRedux())
                // navigate(ROUTES.HOME, { replace: true });
            }
    }

    const logOutokenBatch=()=>{
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
        dispatch(logOutRedux())
    }
    

    return {logInTokenBatch, logOutokenBatch}

}