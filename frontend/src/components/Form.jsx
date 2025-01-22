import React, { useState } from 'react';

function Form({ title, fields, buttonText, extraActions, handleSubmit }) {
  // Initialize state with an object where each field's label is a key
  const initialFormData = {};
  fields.forEach((field) => {
    initialFormData[field.label] = '';
  });
  const [formData, setFormData] = useState(initialFormData);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Pass data to parent component
  };

  return (
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>{title}</h1>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              <span className='text-base label-text'>{field.label}</span>
            </label>
            <input
              type={field.type}
              name={field.label} // Use label as the key for simplicity
              placeholder={field.placeholder}
              value={formData[field.label]} // Bind value to state
              onChange={handleChange} // Update state on change
              className='w-full input input-bordered'
              required
            />
          </div>
        ))}
        <button type="submit" className='btn btn-outline btn-accent w-full mt-4 mb-4'>
          {buttonText}
        </button>
        {extraActions && <div className="flex justify-center items-center">{extraActions}</div>}
      </form>
    </div>
  );
}

export default Form;
