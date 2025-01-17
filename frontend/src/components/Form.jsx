import React from 'react';

function Form({ title, fields, buttonText, extraActions }) {
  return (
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>{title}</h1>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              <span className='text-base label-text'>{field.label}</span>
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className='w-full input input-bordered'
            />
          </div>
        ))}
        <button className='btn btn-outline btn-accent w-full mt-4 mb-4'>{buttonText}</button>
        {extraActions && <div className="flex justify-center items-center">{extraActions}</div>}
      </form>
    </div>
  );
}

export default Form;
