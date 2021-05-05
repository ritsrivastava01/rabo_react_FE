import React from 'react';

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
    <div className="form-row">
      <div className="col-md-4 mb-3">
        <label htmlFor={'input_' + name}>{title}</label>
        <input
          type={type}
          name={name}
          id={'input_' + name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
          className={`form-control ${error ? 'is-invalid' : ''}`}
        ></input>
        <div className="invalid-feedback">{error}</div>
      </div>
    </div>
  );
};

export default TextInput;
