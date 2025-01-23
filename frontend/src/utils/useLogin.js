import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext'
import axios from "axios"
import toast from 'react-hot-toast'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()
  
  const login = async ({username, password}) => {
    setLoading(true)
    try {
        const res = await axios.post('/api/auth/login', {
            username,
            password
        });

        const data = res.data;
        console.log(data);

        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem("logged-user", JSON.stringify(data))
        setAuthUser(data)
        toast(`Welcome! ${data.username}`, {
            icon: '👏',
          });

    } catch (err) {
        if(err.message == "Request failed with status code 400"){
            toast.error("Wrong Credentials")
        } else {
            toast.error(err.message)
        }


        
    } finally {
        setLoading(false)
    }
  }

  return {loading, login}

}

export default useLogin