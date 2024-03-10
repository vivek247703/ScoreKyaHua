import React from 'react'
import logo from '../Assets/logo.png'

export const Header=()=> {
  return (
    <div className="flex justify-between shadow-lg mb-2 h-24">
        <div>
        <a href="/">
          <img
              src={logo}
            alt="App Logo"
            className="w-40 h-24"
          />
          </a>
        </div>
        <div className="nav-items items-center px-4">
          <ul className="flex p-8">
            <li className="px-4 cursor-pointer">Home</li>
            <li className="px-4 cursor-pointer">About Us</li>
            <li className="px-4 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
  )
}
