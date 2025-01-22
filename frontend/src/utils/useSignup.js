import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext()

    const signup = async ({fullname, username, password, confirmPassword}) => {
        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword})
            })

            const data = await res.json();
            console.log(data)

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("logged-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    };

    return {loading, signup}

    
}

export default useSignup