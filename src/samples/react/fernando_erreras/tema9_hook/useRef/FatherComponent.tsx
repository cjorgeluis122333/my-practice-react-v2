import {useState} from "react";
import {SonComponent} from "./SonComponent.tsx";

export const FatherComponent = () => {

    const [show, setShow] = useState(true)
    return (<>
        {show && <SonComponent/>}
        <button
            onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
        </button>


    </>)
}