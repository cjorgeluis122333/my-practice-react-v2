import {useState} from "react";

export const useCounter = (counterChangeValue: number = 1) => {
    const [counter, setCounter] = useState<number>(0)

    const incrementCounter = () => {
        setCounter(counter + counterChangeValue);
    }

    const decrementCounter = () => {
        setCounter(counter - counterChangeValue);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return {counter, incrementCounter, decrementCounter, resetCounter, };

}