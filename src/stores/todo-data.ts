import { makeVar } from "@apollo/client";
import { todoStore } from "./todo-store/todo-store";

export interface ITodo {
    content: string;
    createdAt: string;
    id: string;
    title: string;
    updatedAt: string;
  }
  interface ITodoStore {
    todoData:ITodo[],
    selectedTodo:ITodo,
  }
  export type TodoInput = Pick<ITodo, "title" | "content">;
  


  const todoDefault:ITodoStore = {
    todoData:[],
    selectedTodo: todoStore.makeDefaultObj()
  }
  


export const todoDataVar = makeVar(todoDefault);