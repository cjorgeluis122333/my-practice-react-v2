# useRef

This hook is used if you have a component and
delay some time, and before it's ready for show you hidden

## Example

* You make a request of 4 second
  If the loading show a loading component
  Else show the data

```
  const SonCompontent () => {
       if(isLoadin) /
           <LoadingComponent/>
       else
           <InfoComponent/>
  }          
```

* You have a father component
  This component use the SonComponent with a conditional
  If show is press hidde SonComponent
  Else show the SonComponent

```tsx
import {useState} from "react";

const FatherComponent = () => {
  const [show, setShow] = useState(true)
  
  return (<>
              {show && <SonComponent/>}
              <button onClick={setShow(!show)}>Hidde</button>
  </>)
}
```

## Error happen
 1. If the SonComponent is loading waiting for show the info
 2. If in your FatherComponent while the SonComponent is steel loading you push the button
 3. The SonComponent keep making the request and when it finished the request he change of state but he is hidde

If you are in this situation you will have a fuga of memory

## Fixed the error
 The solution is use the ***useRef*** reference request at the moment it change her data

```js
const [data,setData] = useState({})
const isMounted = useRef(true)

    useEffect(() => {
       return () => { 
          isMounted.current = false
       }
    }, []);

     fetch(url)
        .then(response => response.json)
        .then((data) => {
            if (ref.current)
              setData(data)
        })
```