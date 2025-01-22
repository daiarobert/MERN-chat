import React from 'react';
import Form from '../../components/Form';
import useSignup from '../../utils/useSignup';

function SignUp() {
  const fields = [
    { label: 'fullname', type: 'text', placeholder: 'Enter your Full Name' },
    { label: 'username', type: 'text', placeholder: 'Enter Username' },
    { label: 'password', type: 'password', placeholder: 'Enter Password' },
    { label: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
  ];

  const {loading, signup} = useSignup()

  const handleFormSubmit = async (formData) => {
    console.log('Form Submitted:', formData);
    await signup(formData)
    // Perform further actions, e.g., sending data to a server
  };

  

  const extraActions = (
    <>
      <a href="/" className="btn btn-outline btn-primary mr-4">Already have an account? Login</a>
    </>
  );

  return (
    <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
      <Form title="Sign Up" fields={fields} buttonText="Sign Up" extraActions={extraActions} handleSubmit={handleFormSubmit} />
    </div>
  );
}

export default SignUp;
