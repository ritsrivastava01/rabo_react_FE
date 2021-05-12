import axios from 'axios';

/**
 * Make the save api call
 * @param  {} user
 */
export async function saveUser(user) {
  try {
    return await axios.post('https://demo-api.now.sh/users', user);
  } catch (err) {
    return { error: err.message };
  }
}

/**
 * Get the user details
 */
export async function getUser() {
  try {
    return await axios.get('https://demo-api.now.sh/users');
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}
