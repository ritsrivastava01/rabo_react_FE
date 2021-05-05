import { useState } from 'react';
import * as userAPI from '../../services/UserService';
import { sleep, validateEmail, validatePassword } from '.././../utils/Utils';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';
import * as messages from '../../utils/Messages';

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
      if (res.status === 200) toast.success(messages.USER_SAVED_SUCCESS);

      await sleep(4000);
      const resGetUser = await userAPI.getUser();
      if (resGetUser.data) toast.success(messages.USER_RETRIEVE_SUCCESS);
      setApiCallInProgress(false);
    } catch (error) {
      setApiCallInProgress(false);
      toast.error(messages.ERROR_API);
    }
  };

  /**
   * Validate the form
   */
  const isFormValid = () => {
    const { fname, lname, password, email } = user;
    const errors = {};
    if (!fname) errors.fname = messages.ERROR_FIRST_NAME;
    if (!lname) errors.lname = messages.ERROR_LAST_NAME;
    if (!email) errors.email = messages.ERROR_EMAIL;
    if (email && !validateEmail(email)) errors.email = messages.ERROR_EMAIL;

    if (!password) errors.password = messages.ERROR_MISSING_PASSWORD;
    if (password && !validatePassword(password, fname, lname))
      errors.password = messages;

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
