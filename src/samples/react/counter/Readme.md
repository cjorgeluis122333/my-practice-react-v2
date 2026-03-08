# Counter sample

In this sample you can see how to make a state change his param value

## Resumen

The param should be a state y you want all change

## Sample 

```ts
export const useCounter = (
    counterChangeValue: number = 1 //This  param will subscribed to state 
) => {
    const [counter, setCounter] = useState<number>(0)

    const incrementCounter = () => {
        setCounter(counter + counterChangeValue);
    }

    return {counter, incrementCounter };

}
```

```tsx
export const CounterPage = () => {
    const {value, updateValue} = useSerch()
    const {counter, incrementCounter} = useCounter(value)
    
    return (
        <>
            <input type={"number"} onChange={   //When value change the param of the useCounter change too
                (e) => updateValue(e.target.value)
            } value={value}/>
            
            <button onClick={incrementCounter}>Increment counter +{value}</button>
        </>
    )
}
```