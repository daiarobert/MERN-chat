import React, { useState } from 'react';
import UserInfo from './UserInfo';
import ChatList from './ChatList';
import useGetChats from '../utils/useGetChats';

const Sidebar = () => {
  // State for managing selected chat
  const [selectedChat, setSelectedChat] = useState(null);

  // Fetch chats
  const { loading, chats } = useGetChats();

  // Function to handle chat selection
  const handleChatSelect = (chat) => {
    setSelectedChat(chat); 
    console.log("Selected Chat:", chat);
  };

  return (
    <div>
      <UserInfo selectedChat={selectedChat} />
      <ChatList
        chats={chats}
        loading={loading}
        selectedChat={selectedChat}
        onSelectChat={handleChatSelect}
      />
    </div>
  );
};

export default Sidebar;
