import React from 'react';
import MessageComponent from './MessageComponent';
import useGetMessages from '../utils/useGetMessages';
import useChats from '../store/useChats';

const Messages = () => {
  const {  loading } = useGetMessages();
  const { messages } = useChats();
  console.log(messages)

  return (
    <div className="px-4 flex-1 overflow-auto messages-container">
      {loading ? (
        <p>Loading messages...</p>
      ) : messages && messages.length > 0 ? (
        messages.map((message) => (
          <MessageComponent key={message._id} message={message} />
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
};

export default Messages;
