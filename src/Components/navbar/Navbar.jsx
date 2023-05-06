import React from 'react'
import "./Navbar.scss"
export const Navbar = () => {
  return (
    <div className='navbar h-16 bg-themeblue flex justify-center p-2 lg:p-0'>
      <div className="navcontainer w-full flex justify-between items-center">
        <span className="logo font-semibold">LaMaBooking</span>
        <div className="navItems text-black">
          <button className="NavBtn bg-white p-1 px-3">Register</button>
          <button className="NavBtn bg-white p-1 px-3 ml-6">Login</button>
        </div>
      </div>
    </div>
  )
}
