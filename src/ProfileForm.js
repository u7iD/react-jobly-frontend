import React, { useState, useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";
import JoblyApi from "./JoblyAPI";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { username, first_name, last_name, email, photo_url } = {
    ...currentUser,
  };

  // set default value to empty string so as not to have null value;
  // avoid the warning "`value` prop on `input` should not be null"
  const [formData, setFormData] = useState({
    first_name: first_name || "",
    last_name: last_name || "",
    email: email || "",
    photo_url: photo_url || "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState([]);
  const [changed, setChanged] = useState(false);

  console.debug(
    "ProfileForm...",
    "formData=",
    formData,
    "formErrors=",
    formErrors,
    "changed=",
    changed
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await JoblyApi.updateUser(username, formData);
      setFormErrors([]);
      setFormData((formData) => ({ ...formData, password: "" }));
      setCurrentUser((user) => ({ ...user, ...updatedUser }));
    } catch (error) {
      setFormErrors(error);
    } finally {
      setChanged(true);
    }
  };

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
    setChanged(false);
    setFormErrors([]);
  };

  return (
    <div>
      <h3 className="col-md-4 offset-md-4 px-0 border-0">Profile</h3>
      <div className="card col-md-4 offset-md-4 px-0 border-0">
        <div className="card-body">
          <form className="bg-white" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="font-weight-bold">Username</label>
              <p name="username" className="form-control-plaintext">
                {username}
              </p>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">First name</label>
              <input
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Last name</label>
              <input
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Email</label>
              <input
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Photo URL</label>
              <input
                name="photo_url"
                className="form-control"
                value={formData.photo_url}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">
                Confirm password to make changes:
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {changed && formErrors.length === 0 ? (
              <div className="alert alert-success small">
                Updated successfully
              </div>
            ) : null}
            {changed && formErrors.length > 0
              ? formErrors.map((formError) => (
                  <div className="alert alert-danger small" key={formError}>
                    {formError}
                  </div>
                ))
              : null}

            <button type="submit" className="form-control btn btn-primary">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
