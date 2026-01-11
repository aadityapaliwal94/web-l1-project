import { useEffect, useState } from 'react'

/**
 * Custom hook for managing dark mode state
 * Persists theme preference to localStorage
 * 
 * @returns {[boolean, () => void]} - [isDarkMode, toggleDarkMode]
 */
export const useDarkMode = () => {
    // Check localStorage first, fallback to system preference
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme')
            if (stored) {
                return stored === 'dark'
            }
            // Check system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    }

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement
        
        // Add or remove 'dark' class based on state
        if (isDarkMode) {
            root.classList.add('dark')
            root.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            root.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    }, [isDarkMode])

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        
        const handleChange = (e) => {
            // Only update if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setIsDarkMode(e.matches)
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        
        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    return [isDarkMode, toggleDarkMode]
}

