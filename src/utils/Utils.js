//initial user state
export const initialUserState = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};

/**
 * Sleep the process for provided 'ms'
 * @param  {} ms
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
