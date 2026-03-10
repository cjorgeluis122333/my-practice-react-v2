import {useEffect, useState} from "react";

export const MessageWithEffect = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords

    //Si se añade un event lister siempre hay que removerlo de lo contrario se overrider
    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            const coords = {x: e.x, y: e.y}
            setCoords(coords)
        }
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove) //Importante
        }

    }, [])


    return (
        <>
            <h3>Message</h3>
            <h3>{`x: ${x} y: ${y}`}</h3>
        </>
    )
}