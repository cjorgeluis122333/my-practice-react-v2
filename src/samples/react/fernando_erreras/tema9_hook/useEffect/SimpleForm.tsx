import {useEffect} from "react";
import {MessageWithEffect} from "./MessageWithEffect.tsx";
import {useFormManager} from "./hooks/useFormManager.ts";
import type {SimpleFormParam} from "./type/formType.ts";

export const SimpleForm = () => {
    const {values, handleInputChange} = useFormManager<SimpleFormParam>({
        name: "",
        password: "",
        email: "",
    })

    const {name, password, email} = values


    useEffect(() => {
        console.log("Hey")
    }, [])


    return (
        <>
            <h1>useEffect</h1>

            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter username"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="****"
                    onChange={handleInputChange}
                    value={password}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="tucorreo@gmail.com"
                    onChange={handleInputChange}
                    value={email}
                />


                {(name === "123") && <MessageWithEffect/>}

            </div>

        </>
    )
}