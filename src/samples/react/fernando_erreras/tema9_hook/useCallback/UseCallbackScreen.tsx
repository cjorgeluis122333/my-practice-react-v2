import {useCallback, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.tsx";

export const UseCallbackScreen = () => {
    const [counter, setCounter] = useState(1)


    const increment = useCallback((valueToIncrement: number) => {
        //We can not use counter because the component will reconstruct if you select this
        setCounter(oldValue => oldValue + valueToIncrement)
    }, [setCounter])

    return (
        <>
            <h1>useCallback</h1>
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </>
    )
}