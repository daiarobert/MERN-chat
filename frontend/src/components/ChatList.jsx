import React from 'react'

const ChatList = () => {
  return (
    <div className='ChatList'>
        <div className="search flex items-center justify-between mt-5 gap-5">
        <label class="input input-bordered input-secondary flex items-center gap-5">
        <input type="text" class="grow h-5" placeholder="Search" />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-5 w-5 opacity-70">
            <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
        </label>
            
            <img src='./plus.png' className='h-5 cursor-pointer'/>
        </div>
    </div>
  )
}

export default ChatList