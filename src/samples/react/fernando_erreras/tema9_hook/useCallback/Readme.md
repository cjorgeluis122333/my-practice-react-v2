# useCallback
Cuando tines una función definida en el código cada vez que se ejecuta un componente
1. La función se redefine
2. El componente que utiliza dicha función se redefine dado que su parámetro cambio

Aquí es donde entra el ***useCallback*** dado que dentro es que tú ejecutas la función

```tsx
     export const UseCallbackScreen = () => {
        const [counter, setCounter] = useState(1)

        const increment = useCallback((valueToIncrement: number) => {
        //We can not use counter because the component will reconstruct if you select this
        setCounter(oldValue => oldValue + valueToIncrement)
        }, [setCounter])

        return (
        <>
            <h1>useCallback</h1>
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </>
    )
}
```

Like 