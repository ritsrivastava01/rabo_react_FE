import { validateUserForm } from './Validation';

describe('Validation tests', () => {
  let user = {};
  let error = {};
  let defaultUser = {
    fname: 'first',
    lname: 'last',
    email: 'aa@aa.com',
    password: 'QWweweweQW',
  };

  it('should do the basic validation', () => {
    user = {
      ...defaultUser,
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
    error = validateUserForm(user);
    expect(error.fname).toBeTruthy();
    expect(error.lname).toBeTruthy();
    expect(error.email).toBeTruthy();
    expect(error.password).toBeTruthy();

    user = { ...defaultUser, fname: '', lname: '' };
    error = validateUserForm(user);
    expect(error.fname).toBeTruthy();
  });

  it('should validate the email', () => {
    const user = { ...defaultUser, fname: '', email: 'aa' };
    const error = validateUserForm(user);
    expect(error.email).toBeTruthy();
  });
  describe('Password validation', () => {
    it('case: password includes first name', () => {
      user = { ...defaultUser, password: 'firstPassword' };
      error = validateUserForm(user);
      expect(error.password).toBeTruthy();
    });

    it('case: password includes last name', () => {
      user = { ...defaultUser, password: 'lastPassword' };
      error = validateUserForm(user);
      expect(error.password).toBeTruthy();
    });

    it('case: password length <8 char', () => {
      user = { ...defaultUser, password: '123' };
      error = validateUserForm(user);
      expect(error.password).toBeTruthy();
    });

    it('case: password should incudes 1 capital and 1 small letter', () => {
      user = { ...defaultUser, password: '1234' };
      error = validateUserForm(user);
      expect(error.password).toBeTruthy();
    });

    it('case: No password validation error if its valid', () => {
      user = { ...defaultUser, password: 'Password' };
      error = validateUserForm(user);
      expect(error.password).toBeUndefined();
    });
  });
});
