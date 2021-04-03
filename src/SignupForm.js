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
    console.log("response", response);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            First name
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last name
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          {formErrors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
