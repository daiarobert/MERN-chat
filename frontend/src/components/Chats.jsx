import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import Messages from './Messages'
import useSendMessage from '../utils/useSendMessage';

const Chats = ({ selectedChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [textInput, setTextInput] = useState("");

    const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (! textInput) return;
        await sendMessage(textInput);
        setTextInput(""); 
    }
  
    const handleEmoji = (e) => {
      setTextInput((prev) => prev + e.emoji);
      setIsOpen(false);
    };
  
    if (!selectedChat) {
      return (
        <div className="h-full flex justify-center items-center">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      );
    }
  
    return (
      <div className="h-full flex flex-col w-full p-5 ml-5 chats-container">
        <div className="flex border-b border-purple-600 justify-between items-center">
          <div className="user flex gap-5">
            <img
              src={selectedChat.profilePicture || "./default-avatar.png"}
              alt={`${selectedChat.fullName}'s avatar`}
              className="h-16 rounded-full object-cover cursor-pointer"
            />
            <div className="texts">
              <span>{selectedChat.fullName || selectedChat.username}</span>
              <p className="text-sm text-gray-500">@{selectedChat.username}</p>
            </div>
          </div>
          <div className="icons flex h-4 gap-5">
            <img src="./phone.png" alt="" className="flex items-center justify-center h-5" />
            <img src="./video.png" alt="" className="flex items-center justify-center h-5" />
            <img src="./info.png" alt="" className="flex items-center justify-center h-5" />
          </div>
        </div>
  
        <div className="center p-5 flex-grow">
          <Messages />
        </div>
  
        <div className="bottom flex justify-between items-center mt-auto">
          <div className="flex justify-between gap-5 p-5 pl-0">
            <img src="./img.png" alt="" className="h-5 cursor-pointer" />
            <img
              src="./emoji.png"
              alt=""
              className="h-5 mr-5 cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <div className="emoji-container absolute bottom-0 right-0">
              {isOpen ? <EmojiPicker onEmojiClick={handleEmoji} /> : ""}
            </div>
          </div>
          <input
            type="text"
            placeholder="Type your message.."
            value={textInput}
            className="rounded-3xl bg-gray-900 p-2 w-full"
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button className="btn btn-active btn-primary ml-5" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        </div>
      </div>
    );
  };
  
  export default Chats;
  