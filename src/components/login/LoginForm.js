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
    <form onSubmit={onSave} noValidate className="container">
      <div className="row">
        <div className="col">
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
            type="text"
            name="password"
            title="Password"
            placeholder="Password"
            onChange={onChange}
            value={user.password}
            error={errors.password}
          ></TextInput>
        </div>
        <div className="col">
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
            type="email"
            name="email"
            title="Email"
            placeholder="Email address"
            onChange={onChange}
            value={user.email}
            error={errors.email}
          ></TextInput>
        </div>
      </div>
      <div className=" row justify-content-end pr-3 mt-5">
        <button
          className="btn btn btn-primary btn-lg col-5"
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
