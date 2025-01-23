import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext()

    const signup = async ({fullname, username, password, confirmPassword}) => {
        setLoading(true);

        try {
            const res = await axios.post('/api/auth/signup', {
                fullname,
                username,
                password,
                confirmPassword,
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
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    };

    return {loading, signup}

    
}

export default useSignup