import React from 'react';

const UserInfo = ({ selectedChat }) => {
  return (
    <div className="user-info p-5">
      {selectedChat ? (
        <div className="selected-chat-info flex items-center gap-5">
          <img
            src={selectedChat.profilePicture}
            alt={`${selectedChat.fullName}'s avatar`}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{selectedChat.fullName}</h2>
            <p className="text-sm text-gray-500">@{selectedChat.username}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Select a chat to view user info</p>
      )}
    </div>
  );
};

export default UserInfo;
