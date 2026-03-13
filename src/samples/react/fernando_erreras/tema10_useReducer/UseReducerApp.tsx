import {useReducer} from "react";
import {initTodoState, todoReducerFunction} from "./todoReducerFunction.ts";


export const UseReducerApp = () => {

    const [state, dispatcher] = useReducer(todoReducerFunction, [], initTodoState)

    return (<>
        <ul>
            {
                state.map(todo => {
                    return (
                        <li key={todo.id}>{todo.name}
                            <button
                                key={todo.id}
                                onClick={() => {
                                    dispatcher({payload: todo, type: "DELETE"})
                                }}
                            >Delete</button>
                        </li>)
                })}

        </ul>

    </>)
}