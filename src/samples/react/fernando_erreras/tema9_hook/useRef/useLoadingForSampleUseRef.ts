import {useEffect, useState} from "react";

export const useLoadingForSampleUseRef = () => {

    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<string | null>(null)

    useEffect(() => {
        return () => {
            console.log("I finish my labor")
        }
    }, [])

    setTimeout(() => {
            setLoading(false)
            setData("Successfully Request ...")

        }, 4000
    )
    return {loading, data}
}