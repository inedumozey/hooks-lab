# Description

click-opacity is a react hook that adds opacity to button on mouse down and removed when the mouse is up or leaves, it returns two functions;

1. add(el);
2. remove(el);

Where el is the button/element to which click opacity will be added.
add(el) is called by mousedown event handler while remove(el) is called by both mouseup and mouseleave event handlers

The click-opacity receives an optional argument to set the opacity value

#### Installation
```
    npm i @mozeyinedu/click-opacity
```

#### How to use click-opacity

```
    import {useRef} from 'react';
    import clickOpacity from 'click-opacity';

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
