import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignupForm = ({ signup }) => {
  const initialFormData = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await signup(formData);

    if (response.success) {
      history.push("/jobs");
    } else {
      setFormErrors(response.errors);
    }
  };

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="bg-white" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="font-weight-bold">Username*</label>
        <input
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
        />
        <small className="form-text text-muted">
          between 1 and 55 characters
        </small>
      </div>
      <div className="form-group">
        <label className="font-weight-bold">Password*</label>
        <input
          name="password"
          className="form-control"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <small className="form-text text-muted">
          between 5 and 55 characters
        </small>
      </div>
      <div className="form-group">
        <label className="font-weight-bold">First name*</label>
        <input
          name="first_name"
          className="form-control"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="font-weight-bold">Last name*</label>
        <input
          name="last_name"
          className="form-control"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="font-weight-bold">Email*</label>
        <input
          name="email"
          className="form-control"
          value={formData.email}
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

export default SignupForm;
