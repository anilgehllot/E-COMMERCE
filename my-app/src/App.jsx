//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { Login } from './component/Login'
import { Signup } from './component/Signup'


function App() {

  return (
    <>
     <Routes>
      <Route path ="/login" element ={<Login/>}/>
      <Route path ="/signup" element ={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
