import { messages } from './Messages';

/**
 * Validate the form
 * @param  {} user
 */
export function validateUserForm(user) {
  const { fname, lname, password, email } = user;
  const errors = {};
  if (!fname) errors.fname = messages.ERROR.FIRST_NAME_MISSING;
  if (!lname) errors.lname = messages.ERROR.LAST_NAME_MISSING;
  if (!email) errors.email = messages.ERROR.EMAIL_MISSING;
  if (email && !validateEmail(email))
    errors.email = messages.ERROR.EMAIL_INVALID;

  if (!password) errors.password = messages.ERROR.PASSWORD_MISSING;
  if (password && !validatePasswordPattern(password, fname, lname))
    errors.password = messages.ERROR.PASSWORD_INVALID;
  return errors;
}

/**
 * Used to validate the email
 * @param  {} email
 */
function validateEmail(email) {
  const pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  const patternRegExp = new RegExp(pattern);
  return patternRegExp.test(email);
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
function validatePasswordPattern(password, fname, lname) {
  if (password.includes(fname)) return false;
  if (password.includes(lname)) return false;
  return /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/.test(password);
}
