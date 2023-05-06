import React from 'react'
import "./MailList.scss"
export const MailList = () => {
  return (
    <div className='mail w-full mt-12 bg-themeblue text-white flex flex-col items-center gap-5 p-7'>
      <h1 className='mailTitle'>Save Time , Save Money!</h1>
      <span className='mailDes'>Sign up and We'll send best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='your Email' className='mailInput'/>
        <button className='text-white font-semibold boder-0 rounded-sm cursor-ponter
        '>Subscribe</button>
      </div>
    </div>
  )
}
