import React from 'react';

/**
 * Dump component
 * @param  {} {name ==> Name of the input box
 * @param  {} type ==> Type of the input box
 * @param  {} title ==> Title of the component
 * @param  {} onChange ==> Input text box change handler
 * @param  {} placeholder ==> Placeholder for the input box
 * @param  {} error ==> Error message, if there
 * @param  {} value ==> Value of the input box
 * @param  {} }
 */
const TextInput = ({
  name,
  type,
  title,
  onChange,
  placeholder,
  error,
  value,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={'input_' + name}>{title}</label>
      <input
        type={type}
        name={name}
        data-testid={'input_' + name}
        id={'input_' + name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        className={`form-control ${error ? 'is-invalid' : ''}`}
      ></input>
      <div
        className="invalid-feedback"
        data-foo="error"
        data-testid={'error_' + name}
      >
        {error}
      </div>
    </div>
  );
};

export default TextInput;
