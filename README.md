# Descriptions

hooks-lab is a react package that houses several react hooks such as useSnap, useToggle etc.

#### Installation
```
    npm i @mozeyinedu/hooks-lab
```

### useSnap
* useSnap is the first hooks created in hooks-lab. It is used to add snap on a custom button (flash of opacity of on a custom button when the button is clicked)
* It receives an optional argument to set the opacity. If no argument is specified, the default is 0.4 
* It returns a snap function which binds the button to the useSnap hook
* The div should be styled as a real button for this functionality to become visible

```
  import { useSnap } from '@mozeyinedu/hooks-lab';

    
  function App() {
    const { snap } = useSnap(.5);
  
    return (
      <>
        <div style={style} {...snap() }>Click Me</div> { /* this line uses .5 as specified above, not a default */ }
        <div style={style} {...useSnap(.9).snap() }>Click Me</div>
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
    const { snap } = useSnap();
  
    return (
      <>
        <div style={style} {...snap() }>Click Me</div> { /* this line uses .4, the default */ }
        <div style={style} {...useSnap(.9).snap() }>Click Me</div>
      </>
    );
  }

  export default App;

```


### useToggle

* useToggle is the second hook created in hooks-lab. it returns toggleState and toggle.
* toggleState is a boolean which can either be true or false.
* toggle is a function that changes toggleState from true to false and vice versa.
* Initially, toggleState is true, when toggle is executed (toggle()), it changes toggleState from true to false an saved in the local storage, when toggle is executed again, toggleState changes from false to true in the local storage. toggleState will continue to be in the local storage until manually deleted.

##### Use cases of useToggle hook
* Can be used to toggle between drak and light theme in react web apps, or react native applications
* Can be used for whatever you want to toggle and tract the toggle state in local storage

##### Example

```
import { useToggle } from '@mozeyinedu/hooks-lab';

function App() {
    const { toggle, toggleState } = useToggle();

    const style = {
        width: '300px',
        height: '300px',
        border: '1px solid',
        transition: 'all .3s',
        background: toggleState ? "#dfdfdf" : '#555',
        color: toggleState ? "#000" : '#fff'
    };
    
    return (
        <div onClick={toggle} style={style}>{toggleState ? 'Dark Theme' : 'Light Theme'}</div>
        
    );
}

export default App;

```



-----------------------------------------------------------------------


# Version > 5.0.3

### useToggle


```
import { useToggle } from '@mozeyinedu/hooks-lab';

function App() {
    const [ toggle, useToggle ] = useToggle();

    const style = {
        width: '300px',
        height: '300px',
        border: '1px solid',
        transition: 'all .3s',
        background: toggle ? "#dfdfdf" : '#555',
        color: toggle ? "#000" : '#fff'
    };
    
    return (
        <div onClick={useToggle} style={style}>{toggle ? 'Dark Theme' : 'Light Theme'}</div>
        
    );
}

export default App;

```

### useTheme
To implement dark/light theme

```
  import { useTheme } from '@mozeyinedu/hooks-lab';

   const themColors = {
      light: {bg: '#fff', text: '#000'},
      dark: {bg: '#000', text: '#fff'}
  }

  function App() {
      const [colors, setColors] = useTheme({ light: themeColors.light, dark: themeColors.dark })
      return (
          <div onClick={setColors} style={{background: colors.bg, color: colors.text}}</div>
          
      );
  }

export default App;
```