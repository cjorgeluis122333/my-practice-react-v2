import {memo} from "react";

export interface MemoSmallTextParam {
    name: number
}

export const MemoSmallText = memo(({name}: MemoSmallTextParam) => {
        console.log("I called again" + name)
        return (
            <>
                <small> {name} </small>
            </>
        )
    }
)