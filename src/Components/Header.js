import React from 'react'

export const Header=()=> {
  return (
    <div className="flex justify-between shadow-lg mb-2 h-24">
        <div>
        <a href="/">
          <img
            src='https://play-lh.googleusercontent.com/UCQXKmZg3qOLL9Dkt9hFXo_m3a_NGlxqvf9gYxKZ0GXUuXXxw90k6qVVeejj1yYo_Z8'
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
