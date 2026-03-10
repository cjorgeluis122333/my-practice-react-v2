import {useState} from "react";
import {transformOperator} from "./transformOperator.ts";

export const useCounterApp = (counter1Value:number = 0,counter2Value:number=0) => {
    const [counter, setCounter] = useState({
        counter1: counter1Value,
        counter2: counter2Value,
    });

    const {counter1, counter2} = counter;

    const updateCounter1 = (value: number = 1, operator: string = '+') => {
        setCounter({
            ...counter,
            counter1: transformOperator(counter1, value, operator),
        })
    }
    const updateCounter2 = (value: number = 1, operator: string = '+') => {

        setCounter({
            ...counter,
            counter2: transformOperator(counter2, value, operator),
        })
    }

    return {counter, updateCounter1, updateCounter2};
}