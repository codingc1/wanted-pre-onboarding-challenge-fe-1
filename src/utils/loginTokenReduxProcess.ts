import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";



export const loginTokenReduxProcess=(token:string|null|undefined)=>{
    if(!token)throw Error
    localStorage.setItem(LOCALSTORAGE_TOKEN, token);
    authTokenVar(token);
    isLoggedInVar(true)
}