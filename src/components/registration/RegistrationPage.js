import { useState } from 'react';
import * as userAPI from '../../services/UserService';
import { sleep, initialUserState } from '../../utils/Utils';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';
import { validateUserForm } from '../../utils/Validation';
import { messages } from '../../utils/Messages';

/**
 * Registration page ==> smart component
 * Used to handle the state update, errors, api calls
 */
const RegistrationPage = () => {
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

    setApiCallInProgress(true);
    const resSaveUser = await userAPI.saveUser(payload);
    setApiCallInProgress(false);

    if (resSaveUser.error) return toast.error(resSaveUser.error);
    if (resSaveUser.status === 200) toast.success(messages.SAVE_USER_SUCCESS);

    setApiCallInProgress(true);
    await sleep(4000);
    setApiCallInProgress(false);

    setApiCallInProgress(true);
    const resGetUser = await userAPI.getUser();
    setApiCallInProgress(false);
    if (resGetUser.error) return toast.error(resGetUser.error);
    if (resGetUser.data) toast.success(messages.GET_USER_SUCCESS);
  };

  /**
   * Validate the form
   */
  const isFormValid = () => {
    const errors = validateUserForm(user);
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
export default RegistrationPage;
