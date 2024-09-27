'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {

    if(theme === 'dark'){
      setTheme('light');
      return;
    }
    if(theme === 'light'){
      setTheme('dark');
      return;
    }

    if(theme === 'system'){
      setTheme('dark');
      return;
    }


  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div onClick={toggleTheme} className='inline-block w-fit p-2'>
      {
        theme === 'dark' ? <Sun/> : <Moon/>
      }
      
    </div>
  )
}