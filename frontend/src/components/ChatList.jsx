import React from 'react';

const ChatList = ({ chats, loading, selectedChat, onSelectChat }) => {
  return (
    <div className="ChatList">
      <div className="search flex items-center justify-between mt-5 gap-5">
        <label className="input input-bordered input-secondary flex items-center gap-5">
          <input type="text" className="grow h-5" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* <img src="./plus.png" className="h-5 cursor-pointer" alt="Add" /> */}
      </div>
      <div className="contacts overflow-y-scroll">
        {loading ? (
          <div className="flex items-center justify-center p-5">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
          </div>
        ) : (
          chats.map((chat) => (
            <div
              key={chat._id}
              className={`item flex items-center gap-5 p-5 pl-0 cursor-pointer border-b border-purple-600 ${
                selectedChat?._id === chat._id ? 'border-blue-600' : ''
              }`}
              onClick={() => onSelectChat(chat)}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={chat.profilePicture}
                  alt={`${chat.fullName}'s avatar`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="texts">
                <span>{chat.fullName || chat.fullname}</span>
                <p>Hello</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;
