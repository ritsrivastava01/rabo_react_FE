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
    <form
      onSubmit={onSave}
      noValidate
      className="d-flex flex-column align-items-center"
    >
      <div className="col-md-4 col-sm-10">
        <TextInput
          type="input"
          name="fname"
          title="First Name"
          placeholder="First name"
          onChange={onChange}
          value={user.fname}
          error={errors.fname}
        ></TextInput>

        <TextInput
          type="input"
          name="lname"
          title="Last Name"
          placeholder="Last name"
          onChange={onChange}
          value={user.lname}
          error={errors.lname}
        ></TextInput>

        <TextInput
          type="text"
          name="password"
          title="Password"
          placeholder="Password"
          onChange={onChange}
          value={user.password}
          error={errors.password}
        ></TextInput>

        <TextInput
          type="email"
          name="email"
          title="Email"
          placeholder="Email address"
          onChange={onChange}
          value={user.email}
          error={errors.email}
        ></TextInput>
        <button
          data-testid="submit_button"
          className="btn btn btn-primary btn-lg col shadow mb-4"
          type="submit"
          disabled={apiCallStatus}
        >
          {apiCallStatus ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
