import TextInput from '../common/TextInput';
/**
 * Dump component
 * @param  {} {apiCallStatus ==> API status, true false
 * @param  {} user ==> user
 * @param  {} onChange ==> Form input handler
 * @param  {} onSave ==> Form save handler
 * @param  {} errors} ==> Errors on the form
 */
const LoginForm = ({ apiCallStatus, user, onChange, onSave, errors }) => {
  return (
    <form onSubmit={onSave} noValidate>
      <TextInput
        type="input"
        name="fname"
        title="First Name"
        placeholder="Your first name"
        onChange={onChange}
        value={user.fname}
        error={errors.fname}
      ></TextInput>

      <TextInput
        type="input"
        name="lname"
        title="Last Name"
        placeholder="Your last name"
        onChange={onChange}
        value={user.lname}
        error={errors.lname}
      ></TextInput>

      <TextInput
        type="text"
        name="password"
        title="Password"
        placeholder="Your password"
        onChange={onChange}
        value={user.password}
        error={errors.password}
      ></TextInput>

      <TextInput
        type="email"
        name="email"
        title="Email"
        placeholder="Your first name"
        onChange={onChange}
        value={user.email}
        error={errors.email}
      ></TextInput>

      <button
        className="btn btn btn-outline-primary mt-2 btn-lg col-md-4"
        type="submit"
        disabled={apiCallStatus}
      >
        {apiCallStatus ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};
export default LoginForm;
