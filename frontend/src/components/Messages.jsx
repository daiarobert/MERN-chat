import React from 'react';
import MessageComponent from './MessageComponent';
import useGetMessages from '../utils/useGetMessages';
import useChats from '../store/useChats';

const Messages = () => {
  const {  loading } = useGetMessages();
  const { messages } = useChats();
  console.log("Messages:", messages);

  console.log("Type of messages:", typeof messages);
  console.log("Is messages an array?:", Array.isArray(messages));
  console.log("messages value:", messages);



  return (
    <div className="px-4 flex-1 overflow-auto messages-container">
      {loading ? (
        <p>Loading messages...</p>
      ) : Array.isArray(messages) ? (
        messages.length > 0 ? (
          messages.map((message) => (
            <MessageComponent key={message._id} message={message} />
          ))
        ) : (
          <p>No messages yet.</p>
        )
      ) : (
        <p>Messages data is invalid.</p>
      )}
    </div>
  );
};

export default Messages;
