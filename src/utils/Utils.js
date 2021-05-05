export function validateEmail(email) {
  const mailFormat = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  const pattern = new RegExp(mailFormat);
  return pattern.test(email);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function validatePassword(password, fname, lname) {
  if (password.includes(fname)) return false;
  if (password.includes(lname)) return false;
  return /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/.test(password);
}
