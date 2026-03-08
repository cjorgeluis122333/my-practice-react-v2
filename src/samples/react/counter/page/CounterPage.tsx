import {useSerch} from "../hook/useSerch.ts";
import {useCounter} from "../hook/useCounter.ts";

export const CounterPage = () => {

    const {value, updateValue} = useSerch()
    const {counter, incrementCounter, decrementCounter, resetCounter} = useCounter(value)


    return (<>

        <input type={"number"} onChange={
            (e) => updateValue(e.target.value)
        } value={value}/>
        <h2>Current counter at: {counter}</h2>
        <div className="" style={{padding: "10px"}}>
            <button onClick={incrementCounter}>Increment counter +{value}</button>

            <button onClick={decrementCounter}>Decrement counter -{value}</button>

            <button onClick={resetCounter}>Reset</button>

        </div>


    </>)

}