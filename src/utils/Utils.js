/**
 * Used to validate the email
 * @param  {} email
 */
export function validateEmail(email) {
  const mailFormat = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  const pattern = new RegExp(mailFormat);
  return pattern.test(email);
}
/**
 * Sleep the process for provided 'ms'
 * @param  {} ms
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Validate the password:
 * Should not contain the first name
 * Should not contain the last name
 * Should contain minimum 8 char including one capital and one small char
 * @param  {} password
 * @param  {} fname
 * @param  {} lname
 */
export function validatePassword(password, fname, lname) {
  if (password.includes(fname)) return false;
  if (password.includes(lname)) return false;
  return /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/.test(password);
}
