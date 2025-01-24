
import Chats from '../../components/Chats'
import useLogout from '../../utils/useLogout'
import UserInfo from '../../components/UserInfo'
import ChatList from '../../components/ChatList'
import useGetChats from '../../utils/useGetChats'
import useChats from '../../store/useChats'

const Home = () => {
    const {loading, logout} = useLogout();
    const {selectedChat, setSelectedChat} = useChats();

    // Fetch chats
    const { chats } = useGetChats();
  
    // Function to handle chat selection
    const handleChatSelect = (chat) => {
      setSelectedChat(chat); 
      console.log("Selected Chat:", chat);
    };
  return (
    <div className='home w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <div className='flex'>
            {/* <Sidebar /> */}
            <div>
            {/* <UserInfo selectedChat={selectedChat} /> */}
            <ChatList
              chats={chats}
              loading={loading}
              selectedChat={selectedChat}
              onSelectChat={handleChatSelect}
            />
            </div>
            <Chats selectedChat={selectedChat}/>
        </div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home