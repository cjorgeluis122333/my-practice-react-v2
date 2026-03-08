import {useEffect, useState} from "react";
import {personsList, type PersonType} from "../../../ts/list.ts";

export const useFamily = () => {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState<PersonType[]>([]);

    const makeRequest = async () => {
        try {
            setLoading(true)
            setTimeout(() => {
                setData([...personsList])
            }, 1000)
        } catch {
            console.log("error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        makeRequest()
    }, []);

    return {data, isLoading}
}