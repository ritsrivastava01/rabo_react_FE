import { useState } from 'react';
import * as userAPI from '../../services/UserService';
import { sleep, validateEmail, validatePassword } from '.././../utils/Utils';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';
import { initialUserState } from '../../utils/useUserDataManager';

const LoginPage = () => {
  const [user, setUser] = useState(initialUserState);
  const [errors, setErrors] = useState({});
  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    user[name] = value;

    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const onSaveHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) return;
    postUser();
  };
  const postUser = async () => {
    const data = {
      firstName: user.fname,
      lastName: user.lname,
      email: user.email,
    };

    try {
      setApiCallInProgress(true);
      const res = await userAPI.saveUser(user);
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

    //setErrors(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
