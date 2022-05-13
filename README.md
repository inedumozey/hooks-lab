# Descriptions

hooks-lab is a react package that houses several react hooks such as clickOpacity etc.

#### Installation
```
    npm i @mozeyinedu/hooks-lab
```

#### UseSnap

* UseSnap receives an optional argument to set the opacity.
* Behind the scene, the default argument is 0.4 if no argument is specified
* It returns a snap function which binds the button to the UseSnap hook
* The div should be styled as a real button for this functionality to become visible

```
  import { UseSnap } from '@mozeyinedu/hooks-lab';

    
  function App() {
    const { snap } = UseSnap(.5);
  
    return (
      <>
        <div style={style} {...snap() }>Click Me</div> { /* this line uses .5 as specified above, not a default */ }
        <div style={style} {...UseSnap(.9).snap() }>Click Me</div>
      </>
        
        
    );
  }

  export default App;

  const style={
    padding: '8px',
    border: '1px solid',
    display: 'inline-block',
    background:'teal',
    color: '#fff',
    cursor: 'default',
    userSelect: 'none'
  }

```

```

  function App() {
    const { snap } = UseSnap();
  
    return (
      <>
        <div style={style} {...snap() }>Click Me</div> { /* this line uses .4, the default */ }
        <div style={style} {...UseSnap(.9).snap() }>Click Me</div>
      </>
        
        
    );
  }

  export default App;

```





-----------------------------------------------------------------------


##### Stay tuned for more hooks