import { useReducer } from 'react';
import userReducer from './UserReducer';
import * as actionTypes from './ActionType';
export const initialUserState = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};
const useUserDataManager = () => {
  const [{ user, apiCallInProgress, errors }, dispatch] = useReducer(
    userReducer,
    {
      user: initialUserState,
      apiCallInProgress: false,
      errors: {},
    }
  );
  const saveUser = (user) => {
    console.log('save user called');
    dispatch({ type: actionTypes.SAVE_USER, data: user });
  };

  const getUser = (user) => {
    console.log('get user called');
    dispatch({ type: actionTypes.GET_USER });
  };
  const updateUser = (user) => {
    console.log('update user called');
    dispatch({ type: actionTypes.UPDATE_USER, data: user });
  };
  const setErrors = (errors) => {
    console.log('update user called');
    dispatch({ type: actionTypes.SET_ERROR, data: errors });
  };

  return {
    user,
    apiCallInProgress,
    errors,
    saveUser,
    getUser,
    updateUser,
    setErrors,
  };
};
export default useUserDataManager;
