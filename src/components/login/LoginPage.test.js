import React from 'react';
import LoginPage from './LoginPage';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as userAPI from '../../services/UserService';
import '@testing-library/jest-dom';

describe('UserService', () => {
  const defaultUser = {
    fname: 'first',
    lname: 'last',
    email: 'aa@aa.com',
    password: 'QWweweweQW',
  };

  it('renders sign up form', () => {
    render(<LoginPage />);
    expect(screen.getByTestId('input_fname')).toBeInTheDocument();
    expect(screen.getByTestId('input_lname')).toBeInTheDocument();
    expect(screen.getByTestId('input_email')).toBeInTheDocument();
    expect(screen.getByTestId('input_password')).toBeInTheDocument();
    expect(screen.getByTestId('submit_button')).toBeInTheDocument();
  });

  it('validation error message is shown when form is submitted without details', () => {
    const { container } = render(<LoginPage />);
    userEvent.click(screen.getByTestId('submit_button'));
    expect(container.getElementsByClassName('invalid-feedback').length).toBe(4);

    userEvent.type(screen.getByTestId('input_fname'), 'first');
    userEvent.click(screen.getByTestId('submit_button'));
    expect(screen.getAllByTestId('error_fname').text).toBe(undefined);

    userEvent.type(screen.getByTestId('input_lname'), 'last');
    userEvent.click(screen.getByTestId('submit_button'));
    expect(screen.getAllByTestId('error_fname').text).toBe(undefined);
  });

  it('should post the user if form filled correctly', async () => {
    userAPI.saveUser = jest.fn(() => {
      return Promise.resolve({ status: 200 });
    });
    userAPI.getUser = jest.fn(() => {
      return Promise.resolve(defaultUser);
    });
    jest.useFakeTimers();
    render(<LoginPage />);
    userEvent.type(screen.getByTestId('input_fname'), defaultUser.fname);
    userEvent.type(screen.getByTestId('input_lname'), defaultUser.lname);
    userEvent.type(screen.getByTestId('input_email'), defaultUser.email);
    userEvent.type(screen.getByTestId('input_password'), defaultUser.password);
    await act(async () => {
      await waitFor(() => userEvent.click(screen.getByTestId('submit_button')));
      jest.advanceTimersByTime(4000);
    });

    expect(userAPI.saveUser).toHaveBeenCalledTimes(1);
    expect(userAPI.getUser).toHaveBeenCalledTimes(1);
  });

  it('should not make get call if post call failed', async () => {
    userAPI.saveUser = jest.fn(() => {
      return Promise.resolve({ error: 'failed' });
    });
    userAPI.getUser = jest.fn(() => {
      return Promise.resolve(defaultUser);
    });
    jest.useFakeTimers();
    render(<LoginPage />);
    userEvent.type(screen.getByTestId('input_fname'), defaultUser.fname);
    userEvent.type(screen.getByTestId('input_lname'), defaultUser.lname);
    userEvent.type(screen.getByTestId('input_email'), defaultUser.email);
    userEvent.type(screen.getByTestId('input_password'), defaultUser.password);
    await act(async () => {
      await waitFor(() => userEvent.click(screen.getByTestId('submit_button')));
    });

    expect(userAPI.saveUser).toHaveBeenCalledTimes(1);
    expect(userAPI.getUser).not.toHaveBeenCalled();
  });
});
