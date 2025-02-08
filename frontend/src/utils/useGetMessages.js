import { useEffect, useState } from 'react';
import axios from 'axios';
import useChats from '../store/useChats';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedChat, messages, setMessages } = useChats();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedChat || !selectedChat._id) return; // Ensure selectedChat and _id exist

      setLoading(true);

      try {
        const res = await axios.get(`/api/messages/${selectedChat._id}`);

        const data = res.data;

        console.log('Fetched Messages:', data);

        if (data.error) {
          throw new Error(data.error);
        }

        // Append the new message to the existing messages
        setMessages(data); // Update messages in the store
      } catch (err) {
        console.error('Error fetching messages:', err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if(selectedChat?._id) getMessages(); // Call the function inside useEffect
  }, [selectedChat?._id, setMessages]); // Dependency on selectedChat and setMessages

  return { loading, messages };
};

export default useGetMessages;
