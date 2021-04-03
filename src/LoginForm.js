import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {
  const initialFormData = { username: "testuser", password: "secret" };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await login(formData);
    console.log("handleSubmit response...", response);
    if (response.success) {
      console.log("handleSubmit history push...");
      history.push("/jobs");
    } else {
      setFormErrors(response.errors);
    }
  }

  // Use the same onChange handler for multiple input fields
  // We can do this because the formData properties ("username" and "password")
  // match name attribute values of the input fields
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
          {formErrors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
