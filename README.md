# Description

It's a react hook tha adds opacity to button on mouse down and removed when the mouse is up or leavse, it returns two functions;

1. add(el);
2. remove(el);

the click-opacity receives an optional argument to set the opacity value

Where el is the button/element to which click opacity will be added.
add(el) is called by mousedown event handler while remove(el) is called by both mouseup and mouseleave event handlers

#### Installation
```
    npm i @mozeyinedu/click-opacity
```

#### How to use click-opacity

```
    import {useRef} from 'react';
    import clickOpacity from './hooks/click-opacity';

    export function Button(){

        const btnRef = useRef();
        const { add, remove } = clickOpacity(0.5);

        return (
            <button
                ref={btnRef}
                onMouseDown={()=>add(btnRef.current)}
                onMouseUp={()=>remove(btnRef.current)}
                onMouseLeave={()=>remove(btnRef.current)}
            >Click Me</button>
        )
    }

```
