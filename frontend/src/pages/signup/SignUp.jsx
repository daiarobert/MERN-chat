import React from 'react';
import Form from '../../components/Form';

function SignUp() {
  const fields = [
    { label: 'Username', type: 'text', placeholder: 'Enter Username' },
    { label: 'Email', type: 'email', placeholder: 'Enter Email' },
    { label: 'Password', type: 'password', placeholder: 'Enter Password' },
    { label: 'Confirm Password', type: 'password', placeholder: 'Confirm Password' },
  ];

  const extraActions = (
    <>
      <a href="/" className="btn btn-outline btn-primary mr-4">Already have an account? Login</a>
    </>
  );

  return (
    <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
      <Form title="Sign Up" fields={fields} buttonText="Sign Up" extraActions={extraActions} />
    </div>
  );
}

export default SignUp;
