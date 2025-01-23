import React from 'react'
import Form from '../../components/Form';
import useLogin from '../../utils/useLogin';

function Login() {
    const fields = [
      { label: 'username', type: 'text', placeholder: 'Enter Username' },
      { label: 'password', type: 'password', placeholder: 'Enter Password' },
    ];

    const {loading, login} = useLogin()

    const handleFormSubmit = async (formData) => {
      console.log('Form Submitted from login:', formData);
      await login(formData)
      // Perform further actions, e.g., sending data to a server
    };
  
    const extraActions = (
      <>
        <a href="/forgot-password" className="btn btn-outline btn-primary mr-4">Forgot Password?</a>
        <a href="/signup" className="btn btn-outline btn-secondary">Don't have an account? Signup here</a>
      </>
    );
  
    return (
      <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
        <Form title="Login" fields={fields} buttonText="Login" extraActions={extraActions} handleSubmit={handleFormSubmit}/>
      </div>
    );
  }
  
  export default Login;