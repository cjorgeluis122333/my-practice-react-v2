type TodoProps = {
    id: number;
    name: string;
    done: boolean
}

type TodoAction = {
    type: string;
    payload: TodoProps;
}


export const todoReducerFunction = (initialState: TodoProps [], action: TodoAction): TodoProps[] => {
    switch (action.type) {
        case 'INSERT':
            return [...initialState, action.payload];
        case 'DELETE': {
            const findElement = initialState.find(todo => todo.id === action.payload.id)
            if (findElement) {
                return initialState.filter(todo => todo !== action.payload);
            } else throw Error(`Unknown action: ${action.payload}`);
        }
        case 'UPDATE': {
            const findElement = initialState.find(todo => todo.id === action.payload.id)
            if (findElement) {
                const oldValues = initialState.filter(todo => todo !== action.payload);
                return [...oldValues, action.payload];
            } else throw Error(`Unknown action: ${action.payload}`);
        }

        default:
            return initialState;

    }


}

export const initTodoState = ():TodoProps[] => {
    return [
        {
            id: Date.now(),
            name:"Make Breakfast",
            done:true
        },
        {
            id: Date.now(),
            name:"Make launch",
            done:true
        },
        {
            id: Date.now(),
            name:"Make Dinner",
            done:false
        }
    ]
}


