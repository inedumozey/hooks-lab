import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { useState } from 'react'

const useToggle = () => {
    const [light, setLight] = useState(true);
    const [toggle, setToggleState] = useState(true);

    const setToggle = () => {
        setLight(!light);

        if (localStorage.getItem('toggle') == null) {
            localStorage.setItem('toggle', false);
        } else {
            if (localStorage.getItem('toggle') == "true") {
                localStorage.setItem('toggle', false)
            } else {
                localStorage.setItem('toggle', true)
            }
        }

        setToggleState(false)
    }

    useIsomorphicLayoutEffect(() => {
        if (localStorage.getItem('toggle') !== null) {
            setToggleState(localStorage.getItem('toggle') == "true" ? true : false);
        }

    }, [light]);

    return [
        toggle,
        setToggle
    ]
}

export default useToggle;