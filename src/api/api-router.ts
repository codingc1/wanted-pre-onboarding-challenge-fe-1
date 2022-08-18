import { ITodo } from "../stores/todo-data";
import { BASE_URL } from "./app-setting";
import { axiosLoginApi } from "./axios-instance";

export const APIRouter = {
    users:{ 
      login: BASE_URL+'/users/login',
      signUp: `${BASE_URL}/users/create`,
    },
    todos:{
      crud: `${BASE_URL}/todos`,

    }
    
  };
  export const ApiUser={
    login: async ({ email, password }: ILoginInput): Promise<LoginResponse> => {
      const { data } = await axiosLoginApi.post(`${APIRouter.users.login}`, { email, password });
      return data;
    },
    todo:{
      getTodoList: async function() :Promise<TodoResponse> {
        const { data } = await axiosLoginApi.get<TodoResponse>(`${APIRouter.todos.crud}`, );
        return data;
      },
      postTodoAdd: async function<T>(todoObj:T) :Promise<TodoResponse> {
        const { data } = await axiosLoginApi.post<TodoResponse>(`${APIRouter.todos.crud}`, todoObj );
        return data;
      },
    },
  }


  export interface ILoginInput {
    email: string;
    password: string;
  }
  export type LoginResponse = {
    message: string,
    token: string,
  }; 
  export interface INewTodoInput {
    title: string;
    content: string;
  }
  export type TodoResponse = {
    data: ITodo[]
  }; 
  export type TodoResponseOneTodo = {
    data: ITodo
  }; 
