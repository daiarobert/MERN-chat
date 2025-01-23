import {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import axios from "axios"

const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
        setLoading(true);

        try {
            const res = await axios.get('/api/users');

            const data = res.data;

            if(data.error){
                throw new Error(data.error)
            }

            setChats(data);

        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    getChats();
  }, []);

  return { loading, chats};
}

export default useGetChats