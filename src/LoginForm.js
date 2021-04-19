import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {
  const initialFormData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login(formData);
    console.log("handleSubmit response...", response);
    if (response.success) {
      console.log("handleSubmit history push...");
      history.push("/jobs");
    } else {
      setFormErrors(response.errors);
    }
  };

  // Use the same onChange handler for multiple input fields
  // We can do this because the formData properties ("username" and "password")
  // match the values of the name attribute for the input fields
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="bg-white" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="font-weight-bold">Username</label>
        <input
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="font-weight-bold">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {formErrors.length > 0
        ? formErrors.map((error) => (
            <div className="alert alert-danger small" key={error}>
              {error}
            </div>
          ))
        : null}

      <button type="submit" className="btn btn-primary float-right">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
