import {Card} from "./Card";
import {useEffect, useState} from "react";

export const CardShowRoom = () => {
    const [theme, setTheme] = useState('theme1')

    const toggleTheme = () => {
        setTheme(theme === 'theme1' ? 'theme2' : 'theme1' )
    }

    useEffect(() => {
        const bg = `var(--bg-color-${theme}`
        const color = `var(--color-${theme}`
        document.body.style.setProperty('--bg-color', bg)
        document.body.style.setProperty('--color', color)
    }, [theme])

    return (
        <>
            <Card title={'Hello'} subtitle={'And you'}/>
            <button onClick={toggleTheme}>
                Toggle theme
            </button>
        </>
    )
}
