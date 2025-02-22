import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import useChats from '../store/useChats';

const MessageComponent = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedChat} = useChats();
  const fromMe = message.senderId === authUser.id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  // const profilePic = fromMe ? authUser.profilePic : selectedChat.profilePic;
  const messageBgColor = fromMe ? "bg-blue-500" : "bg-gray-300";
  const messageTime = fromMe ? authUser.createdAt : selectedChat.createdAt;
  console.log("124789823381234" +  authUser)
  console.log("authUser:", JSON.stringify(selectedChat, null, 2));

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src={authUser.profilePicture} />
            </div>
        </div>
        <div className={`chat-bubble text-white${messageBgColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{messageTime}</div>
    </div>
  )
}

export default MessageComponent


