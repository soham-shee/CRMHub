import React from 'react'
import './Header.css'

function Header() {
  const user=true
  return (
    <>
    <div className='nav'>
        <ul className='flex items-center px-10'>
          <div className="box1"><h2 className="text-2xl font-bold flex items-center py-2"><a href='/'>Xeno</a></h2></div>
          <div className="box2">
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/info'>Info</a></li>
            <li hidden={user? "hidden":""}><a href='/register'>Register</a></li>
            <li hidden={user? "hidden":""}><a href='/login'>Login</a></li>
            <li hidden={user? "":"hidden"}><button >Logout</button></li>
          </div>
        </ul>
    </div>
    </>
  )
}

export default Header