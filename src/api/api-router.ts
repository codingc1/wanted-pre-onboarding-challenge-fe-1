import { ITodo } from "../stores/todo-data";
import { BASE_URL } from "./app-setting";

export const APIRouter = {
    users:{ //http://localhost:8080/users/login
      // login: `${BASE_URL}/users/login`,
      login: BASE_URL+'/users/login',
      signUp: `${BASE_URL}/users/create`,
    },
    todos:{
      crud: `${BASE_URL}/todos`,

    }
    
  };

  export type TodoResponse = {
    data: ITodo[]
  }; 
  export type TodoResponseOneTodo = {
    data: ITodo
  }; 
