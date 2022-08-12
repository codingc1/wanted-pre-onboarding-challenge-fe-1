import { ITodo, todoDataVar } from "../todo-data"



export const todoStore={
    makeDefaultObj:function():ITodo{
        return {
            content:'',createdAt:'',id:'0',title:'',updatedAt:''
        }
    },

    setTodos:function(todoData:ITodo[]){
        todoDataVar({...todoDataVar(), todoData})
    },
}