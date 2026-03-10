import {useLoadingForSampleUseRef} from "./useLoadingForSampleUseRef.ts";

export const SonComponent = () => {

    const {data, loading} = useLoadingForSampleUseRef()

    return (<>
            {
                loading
                    ? "Loading..."
                    : `Data loaded: ${data}`
            }
        </>
    )
}