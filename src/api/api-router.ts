import { BASE_URL } from "./app-setting";

export const APIRouter = {
    users:{ //http://localhost:8080/users/login
      // login: `${BASE_URL}/users/login`,
      login: 'http://localhost:8080/users/login',
      signUp: `${BASE_URL}/users/create`,
    },
    todos:{
      crud: `${BASE_URL}/todos`,
    }
    
  };
