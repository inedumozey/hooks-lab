import useToggle from "../toggles/toggles";

const useTheme = (options) => {
    const [toggle, setToggle] = useToggle();

    const colors = toggle ? options?.light : options?.dark

    return [colors, () => setToggle()]
}

export default useTheme;