import * as React from "react";

interface ShowIncrementArg {
    increment: (valueToIncrement: number) => void;
}

export const ShowIncrement = React.memo( ({increment}: ShowIncrementArg) => {
    console.log("I show again")
    return (<>
        <button onClick={()=>{ increment(5)}}>Increment counter</button>
    </>)

})