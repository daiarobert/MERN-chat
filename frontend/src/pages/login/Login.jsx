import React from 'react'
import Form from '../../components/Form';

function Login() {
    const fields = [
      { label: 'Username', type: 'text', placeholder: 'Enter Username' },
      { label: 'Password', type: 'password', placeholder: 'Enter Password' },
    ];
  
    const extraActions = (
      <>
        <a href="/forgot-password" className="btn btn-outline btn-primary mr-4">Forgot Password?</a>
        <a href="/signup" className="btn btn-outline btn-secondary">Don't have an account? Signup here</a>
      </>
    );
  
    return (
      <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
        <Form title="Login" fields={fields} buttonText="Login" extraActions={extraActions} />
      </div>
    );
  }
  
  export default Login;