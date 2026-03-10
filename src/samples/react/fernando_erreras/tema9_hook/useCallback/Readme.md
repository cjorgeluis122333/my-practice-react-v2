# useCallback
Cuando tines una función definida en el código cada vez que se ejecuta un componente
1. La función se redefine
2. El componente que utiliza dicha función se redefine dado que su parámetro cambio

Aquí es donde entra el ***useCallback*** dado que dentro es que tú ejecutas la función

```tsx
import {useEffect} from "react";
import {toKeyAlias} from "@babel/types";
import increment = toKeyAlias.increment;

export const UseCallbackScreen = () => {
    const [counter, setCounter] = useState(1)

    const increment = useCallback((valueToIncrement: number) => {
        //We can not use counter because the component will reconstruct if you select this
        setCounter(oldValue => oldValue + valueToIncrement)
    }, [setCounter])

    useEffect(() => {
        console.log("Si dependo de una funcion esa funcion tiene que ser un useCallback")
    }, [increment])

    return (
        <>
            <h1>useCallback</h1>
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </>
    )
}
```

```tsx
export const ShowIncrement = React.memo( ({increment}: ShowIncrementArg) => {
    console.log("I show again") // This command jast execute one time 
    return (<>
        <button onClick={()=>{ increment(5)}}>Increment counter</button>
    </>)
})
```