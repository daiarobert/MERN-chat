import React from 'react'
import Sidebar from '../../components/Sidebar'
import Chats from '../../components/Chats'
import useLogout from '../../utils/useLogout'

const Home = () => {
    const {loading, logout} = useLogout()
  return (
    <div className='home w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <div className='flex'>
            <Sidebar />
            <Chats />
        </div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home