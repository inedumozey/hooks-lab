# Descriptions

hooks-lab is a react package that houses several react hooks such as clickOpacity etc.

#### Installation
```
    npm i @mozeyinedu/hooks-lab
```

#### clickOpacity
clickOpacity receives an optional argument to set the opacity.
Behind the scene, the default argment is 0.4

```
import { clickOpacity } from '@mozeyinedu/hooks-lab'

function App() {
  const { add, remove } = clickOpacity(.5);
  const btnRef = useRef()
 
  return (
      <div
        ref={btnRef}
        onMouseDown={()=>add(btnRef.current)}
        onMouseUp={()=>remove(btnRef.current)}
        onMouseLeave={()=>remove(btnRef.current)}
      >
      Click Me
    </div>
  );
}

export default App;

```
-----------------------------------------------------------------------------------

##### Stay tuned for more components