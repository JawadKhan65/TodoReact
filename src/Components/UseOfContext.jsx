import { useTheme } from '@emotion/react'
import React from 'react'

const UseOfContext = () => {
    const { theme, toggle } = useTheme()
    return (
        <div>
            <button value={theme} onClick={toggle}>Mode</button>
        </div>
    )
}

export default UseOfContext