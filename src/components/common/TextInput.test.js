import React from 'react';
import TextInput from './TextInput';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);
const renderTextInput = (args) => {
  const defaultProps = {
    name: 'test',
    type: 'text',
    title: 'test',
    onChange: () => {},
    placeholder: 'placeholder',
    error: '',
    value: '',
  };
  const props = { ...defaultProps, ...args };
  return render(<TextInput {...props} />);
};

it('should render the input with values', () => {
  const { getByText } = renderTextInput();
  getByText('test');
});
