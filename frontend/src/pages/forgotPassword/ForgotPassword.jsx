import React from 'react';
import Form from '../../components/Form';

function ForgotPassword() {
  const fields = [
    { label: 'Email', type: 'email', placeholder: 'Enter your email' },
  ];

  const extraActions = (
    <>
      <a href="/" className="btn btn-outline btn-primary mr-4">Back to Login</a>
    </>
  );

  return (
    <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
      <Form title="Forgot Password" fields={fields} buttonText="Reset Password" extraActions={extraActions} />
    </div>
  );
}

export default ForgotPassword;
