import React, {
    useContext, createContext
    , useState
} from 'react'


const themeContext = createContext(undefined)
const Context = ({ children }) => {
    const [theme, setTheme] = useState("light")

    return (
        <>
            <themeContext.Provider value={
                {
                    theme,
                    toggle: () => setTheme(theme === "light" ? "dark" : "light")
                }
            }>{children}</themeContext.Provider>
        </>
    )
}

export const useTheme = () => useContext(themeContext)