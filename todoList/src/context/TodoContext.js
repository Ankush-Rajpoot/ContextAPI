import {createContext,useContext} from "react"
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"learn react",
            completed:false,
        }
    ],
        addTodo:(todo)=>{},
        deleteTodo:(id)=>{},
        toggleCompleted:(id)=>{},
        updateTodo:(id,todo)=>{}
})
export const TodoProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext);
}