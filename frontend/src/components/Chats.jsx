import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import Messages from './Messages'

const Chats = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [textInput, setTextInput] = useState("")

    const handleEmoji = e => {
        console.log(e)
        setTextInput((prev)=> prev + e.emoji)
        setIsOpen(false)
    }

    const handleClickOutside = (event) => {
        if (
          isOpen &&
          emojiContainerRef.current &&
          !emojiContainerRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

    console.log(textInput)

  return (
    <div className='h-full flex flex-col w-full p-5 ml-5 chats-container'>
        <div className=" flex border-b border-purple-600 justify-between items-center">
            <div className="user flex gap-5">
                <img src="./avatar.png" alt="" className='h-16 rounded-full object-cover cursor-pointer'/>
                <div className="texts">
                    <span>User Name</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="icons flex h-4 gap-5">
                <img src="./phone.png" alt="" className='flex items-center justify-center h-5'/>
                <img src="./video.png" alt="" className='flex items-center justify-center h-5'/>
                <img src="./info.png" alt="" className='flex items-center justify-center h-5'/>
            </div>
        </div>

        <div className="center p-5 flex-grow">
            <Messages />
            
        </div>

        <div className="bottom flex justify-between items-center mt-auto ">
            <div className="./icons flex justify-between gap-5 p-5 pl-0">
                <img src="./img.png" alt="" className='h-5 cursor-pointer'/>
                <img src="./emoji.png" alt="" className='h-5 mr-5 cursor-pointer' onClick={()=> setIsOpen((prev)=> !prev)}/>
                <div className="emoji-container absolute bottom-0 right-0" >
                {isOpen ? <EmojiPicker  onEmojiClick={handleEmoji}/> : ''}
                </div>
                {/* <img src="./camera.png" alt="" className='h-5'/> */}
            </div>
            <input type="text" placeholder='Type your message..' value={textInput} className='rounded-3xl bg-gray-900 p-2 w-full' onChange={(e)=>setTextInput(e.target.value)}/>

        <div className="emoji">
            {/* <img src="./emoji.png" alt="" className='h-5 pl-5 pr-5'/> */}
        </div>
        <button className="btn btn-active btn-primary ml-5">Send</button>
        </div>
    </div>
  )
}

export default Chats