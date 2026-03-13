
type PayloadSampleProps = {
    name: string;
    priority: number;
    done:boolean
}

const useReducerSample = (action:string,payload: PayloadSampleProps) => {

    if (action === 'insert') {}


    return {payload}

}