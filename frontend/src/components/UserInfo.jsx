import React from 'react'

const UserInfo = () => {
  return (
    <div className='userInfo flex justify-between items-center'>
        <div className='user flex items-center'>
            <img src='./avatar.png' className='h-14 rounded-full object-cover cursor-pointer'/>
            <h2 className='ml-3'>User Name</h2>
        </div>
        <div className='icons flex h-5 gap-5'>
            <img src='./more.png' className='cursor-pointer'></img>
            <img src='./video.png' className='cursor-pointer'></img>
            <img src='./edit.png' className='cursor-pointer'></img>
        </div>
    </div>
  )
}

export default UserInfo