import React from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

const Forms = () => {
  // Initial state for form data
  const initState = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // State to manage alert messages
  const alertState = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // State to manage focus states
  const focusState = {
    firstName: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  // State variables
  const [formdata, setFormdata] = React.useState(initState);
  const [alert, setAlert] = React.useState(alertState);
  const [focus, setFocus] = React.useState(focusState);
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  // Handle form input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
    console.log( value);
  }

  // Handle input focus events
  function handleFocus(name) {
    setFocus((prevFocusData) => ({ ...prevFocusData, [name]: true }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    let messageBox = {};

    // Validation checks
    if (formdata.firstName === "") {
      messageBox.firstName = "Please Enter your first Name";
    } else {
      messageBox.firstName = "";
    }

    if (formdata.email === "") {
      messageBox.email = "Please Enter your email.";
    } else {
      messageBox.email = "";
    }

    if (formdata.password === "") {
      messageBox.password = "Please Enter a password";
    } else if (formdata.password.length < 5) {
      messageBox.password = "Password should be at least 5 characters";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formdata.password)) {
      messageBox.password = "Password should contain special characters";
    } else {
      messageBox.password = "";
    }

    if (formdata.confirmPassword === "") {
      messageBox.confirmPassword = "Please confirm your password";
    } else if (formdata.password !== formdata.confirmPassword) {
      messageBox.confirmPassword = "Passwords do not match";
    } else {
      messageBox.confirmPassword = "";
    }

    // Update alert state
    setAlert(messageBox);

    // Check if all validations passed
    if (
      messageBox.firstName === "" &&
      messageBox.email === "" &&
      messageBox.password === "" &&
      messageBox.confirmPassword === ""
    ) {
      setRegistrationSuccess(true);
    }
  }

  return (
    <div className="all">
      <Link to="/">
        <div className="navbarforms">
          <p>Kalvium Books</p>
        </div>
      </Link>
      <div className="boxes">
        <div className="headingform">
          <h1>Create Account!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              className="input"
              type="text"
              name="firstName"
              value={formdata.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus("firstName")}
              placeholder="Enter your first name"
              style={{ borderColor: focus.firstName ? "red" : "rgb(255, 0, 0)" }}
            />
            <div>{alert.firstName}</div>
          </label>
          <label htmlFor="">
            <input
              className="input"
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              placeholder="Enter your email"
              style={{ borderColor: focus.email ? "red" : "rgb(255, 0, 0)" }}
            />
            <div>{alert.email}</div>
          </label>
          <label htmlFor="">
            <input
              className="input"
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              onFocus={() => handleFocus("password")}
              placeholder="Enter your password"
              style={{ borderColor: focus.password ? "red" : "rgb(255, 0, 0)" }}
            />
            <div>{alert.password}</div>
          </label>
          <label htmlFor="">
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={handleChange}
              onFocus={() => handleFocus("confirmPassword")}
              placeholder="Confirm your password"
              style={{ borderColor: focus.confirmPassword ? "red" : "rgb(255, 0, 0)" }}
            />
            <div>{alert.confirmPassword}</div>
          </label>
          <button className="buttonform">Register</button>
        </form>
        <div className="success-message">
          {registrationSuccess && <div>Registration Successful!</div>}
        </div>
      </div>
    </div>
  );
};

export default Forms;
