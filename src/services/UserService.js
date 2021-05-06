import axios from 'axios';

/**
 * Make the save api call
 * @param  {} user
 */
export async function saveUser(user) {
  return await axios.post('https://demo-api.now.sh/users', user);
}

/**
 * Get the user details
 */
export async function getUser() {
  return await axios.get('https://demo-api.now.sh/users');
}
