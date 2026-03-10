import {MemoSmallText} from "./component/MemoSmallText.tsx";
import {useMemo, useState} from "react";
import {weightProcess} from "./util/weghtProcess.ts";

export const HoolMemoApp = () => {

    const [counter, setCounter] = useState(5000);


    const memoProcesoPesado = useMemo(() => weightProcess(counter), [counter]);

    return <>
        <h1>Counter App</h1>
        <h2>Counter 1: <MemoSmallText name={counter}/></h2>

        <br/>
        <p>{memoProcesoPesado}</p>

        <button onClick={() => setCounter(1)} className={"btn"}>Increment counter 1 At 2</button>
        <button>I do not any</button>

    </>


}