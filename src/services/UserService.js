import axios from 'axios';

export async function saveUser(user) {
  return await axios.post('https://demo-api.now.sh/users', user);
}

export async function getUser() {
  return await axios.get('https://demo-api.now.sh/users');
}
