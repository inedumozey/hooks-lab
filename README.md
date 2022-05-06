# Descriptions

hooks-lab is a react package that houses several react hooks such as clickOpacity etc.

#### Installation
```
    npm i @mozeyinedu/hooks-lab
```

#### clickOpacity

* clickOpacity receives an optional argument to set the opacity.
* Behind the scene, the default argument is 0.4.
* It returns a snap function which binds the button to the clickOpacity by passing the button ref as argument to the function
* The div should be styled as a real button for this functionality to become visible

```
  import React, {useRef} from 'react';
  import { clickOpacity } from '@mozeyinedu/hooks-lab'


  function App() {
    const { snap } = clickOpacity();
    const btnRef = useRef(null)
  
    return (
        <div ref={btnRef} {...snap(btnRef.current) }>Click Me</div>
    );
  }

  export default App;

```
-----------------------------------------------------------------------


##### Stay tuned for more hooks