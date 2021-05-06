import { useState } from 'react';
import * as userAPI from '../../services/UserService';
import { sleep, initialUserState } from '.././../utils/Utils';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';
import { validateUserForm } from '../../utils/Validation';
import { messages } from '../../utils/Messages';

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
    await saveCall(payload);
    await waitScreen();
    await getCall();
  };

  /**
   * async save call
   * @param  {} payload
   */
  const saveCall = async (payload) => {
    setApiCallInProgress(true);
    const resSaveUser = await userAPI.saveUser(payload);
    console.log(resSaveUser);
    setApiCallInProgress(false);
    if (resSaveUser.error) return toast.error(resSaveUser.error);
    if (resSaveUser.status === 200) toast.success(messages.SAVE_USER_SUCCESS);
  };

  /**
   * Wait for 4 sec
   */
  const waitScreen = async () => {
    setApiCallInProgress(true);
    await sleep(4000);
    setApiCallInProgress(false);
  };

  /**
   * async get user call
   */
  const getCall = async () => {
    setApiCallInProgress(true);
    const resGetUser = await userAPI.getUser();
    setApiCallInProgress(false);
    if (resGetUser.error) return toast.error(resGetUser.error);
    if (resGetUser.data) toast.success('User retrieved successfully!');
  };

  /**
   * Validate the form
   */
  const isFormValid = () => {
    const errors = validateUserForm(user);
    setErrors(errors);
    console.log(errors);
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
