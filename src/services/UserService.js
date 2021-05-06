import axios from 'axios';

/**
 * Make the save api call
 * @param  {} user
 */
export function saveUser(user) {
  return axios
    .post('https://demo-api.now.sh/users', user)
    .then((res) => res)
    .catch((err) => ({
      error: err.message,
    }));
}

/**
 * Get the user details
 */
export function getUser() {
  return axios
    .get('https://demo-api.now.sh/users')
    .then((res) => res)
    .catch((err) => ({
      error: err.message,
    }));
}
