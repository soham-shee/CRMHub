import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './App.css'
import Register from './pages/Register.jsx'
import Notifications from './components/notifications/Notifications.jsx'
import { useState } from 'react'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
      <Notifications/>
    </div>
  )
}

export default App;