import * as types from './ActionType';
const userReducer = (state, action) => {
  action.data.fname = 'Ritesh';
  switch (action.type) {
    case types.UPDATE_USER: {
      const updateVal = {
        ...state,
        user: action.data,
      };
      console.log(updateVal);
      return updateVal;
    }
    default:
      return state;
  }
};
export default userReducer;
