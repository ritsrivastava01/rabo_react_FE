import { useState } from 'react';
import * as userAPI from '../../services/UserService';
import { sleep, validateEmail, validatePassword } from '.././../utils/Utils';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';

//initial user state
export const initialUserState = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};

/**
 * Login page ==> smart component
 * Used to handle the state update, errors, api calls
 */
const LoginPage = () => {
  const [user, setUser] = useState(initialUserState);
  const [errors, setErrors] = useState({});
  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  /**
   * update the user fields
   * @param  {} event
   */
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    user[name] = value;

    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };
  /**
   * Save handler for user form
   * @param  {} event
   */
  const onSaveHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) return;
    postUser();
  };

  /**
   * Post the user data
   */
  const postUser = async () => {
    const payload = {
      firstName: user.fname,
      lastName: user.lname,
      email: user.email,
    };

    try {
      setApiCallInProgress(true);
      const res = await userAPI.saveUser(payload);
      if (res.status === 200) toast.success('User saved successfully!');

      await sleep(4000);
      const resGetUser = await userAPI.getUser();
      if (resGetUser.data) toast.success('User retrieved successfully!');
      setApiCallInProgress(false);
    } catch (error) {
      setApiCallInProgress(false);
      toast.error('Something went wrong. Please try again!');
    }
  };

  /**
   * Validate the form
   */
  const isFormValid = () => {
    const { fname, lname, password, email } = user;
    const errors = {};
    if (!fname) errors.fname = 'Please enter the first name';
    if (!lname) errors.lname = 'Please enter the last name';
    if (!email) errors.email = 'Please enter the valid email';
    if (email && !validateEmail(email))
      errors.email = 'Please enter a valid Email.';

    if (!password) errors.password = 'Please enter the password';
    if (password && !validatePassword(password, fname, lname))
      errors.password = `Password should not include First or Last name.
        Password Should contain minimum 8 character and
        should include one capital and one small letter.`;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /**
   * Login form
   */
  return (
    <LoginForm
      user={user}
      onChange={onChangeHandler}
      onSave={onSaveHandler}
      errors={errors}
      apiCallStatus={apiCallInProgress}
    ></LoginForm>
  );
};
export default LoginPage;
