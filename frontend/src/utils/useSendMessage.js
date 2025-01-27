import { useState} from 'react'
import toast from 'react-hot-toast'
import axios from "axios"
import useChats from '../store/useChats';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {selectedChat, message,setMessages} = useChats();

  const sendMessage = async (message) => {
    setLoading(true);

    console.log(selectedChat)

    try {
        const res = await axios.post(`/api/messages/send/${selectedChat._id}`, {
            message,
            
        });

        const data = res.data;
        console.log(data);

        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem("logged-user", JSON.stringify(data))
        setMessages(data.message);

    } catch (err) {
        toast.error(err.message)
    } finally {
        setLoading(false)
    }
};

return {loading, sendMessage}

}

export default useSendMessage