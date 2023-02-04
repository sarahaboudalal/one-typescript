import React, { useContext } from 'react'
import { ThemeContextProvider } from './ThemeContext'

export default function Box() {
    const theme = useContext(ThemeContextProvider)
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Boxy Box!</div>
    )
}
