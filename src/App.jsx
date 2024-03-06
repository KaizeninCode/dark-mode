import { useState } from 'react'
import './App.css'
import Toggle from './components/Toggle' //create and import a toggle component
import useLocalStorage from 'use-local-storage' //install this dependency

function App() {
  //checks for the user's default theme
  const preferences = window.matchMedia('(prefers-color-scheme: dark)').matches
  //state variable that determines what mode to use between dark and light
  const [isDark, setIsDark] = useLocalStorage('isDark', preferences)
  return (
    // data-theme is a custom HTML property used to determine whether to use light/dark mode
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Hello World!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default App
