
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';

function App() {

  const {authUser} = useAuthContext()

  return (
    <>
     <div className='flex items-center justify-center h-screen p-4'>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> : <SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    <Toaster/>
        
     </div>
    </>
  )
}

export default App
