import "./CounterApp.css"
import {useCounterApp} from "../useState/useCounter.ts";


export const MemoApp = () => {
    const {counter, updateCounter1, updateCounter2} = useCounterApp()


    return (<>
            <h1>Counter App</h1>
            <h2>Counter 1 {counter.counter1}</h2>
            <h2>Counter 1 {counter.counter2}</h2>
            <br/>

            <button onClick={() => updateCounter1(2)} className={"btn"}>Increment counter 1 At 2</button>
            <button onClick={()=> updateCounter2(1)}>Increment counter 2 At 1</button>

        </>

    )

}