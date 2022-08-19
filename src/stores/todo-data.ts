
export interface ITodo {
    content: string;
    createdAt: string;
    id: string;
    title: string;
    updatedAt: string;
  }

  export type TodoInput = Pick<ITodo, "title" | "content">;
  

