import React from 'react';
import '../Components/Froms.css'

const Forms = () => {
    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
    };

    const alertState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
    };

    const focusState = {
        firstName: false,
        lastName: false,
        email: false,
        phoneNum: false,
    };

    const [formdata, setFormdata] = React.useState(initState);
    const [alert, setAlert] = React.useState(alertState);
    const [focus, setFocus] = React.useState(focusState);
    const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormdata((prevdata) => ({ ...prevdata, [name]: value }));
    }
    function handleFocus(name) {
      setFocus((prevfocusdata) => ({ ...prevfocusdata, [name]: true }));
  }

  function handleSubmit(e) {
      e.preventDefault();
      const messageBox = { firstName: "", lastName: "", email: "", phoneNum: "" };

      if (formdata.firstName === "") {
          messageBox.firstName = "Please enter your first name";
      }

      if (formdata.lastName === "") {
          messageBox.lastName = "Please enter your last name";
      }

      if (formdata.email === "") {
          messageBox.email = "Please enter your email";
      }

      if (formdata.phoneNum === "") {
        messageBox.phoneNum = "Please enter your phone number";
    }

    setAlert(messageBox);

    if (messageBox.firstName === "" && messageBox.lastName === "" && messageBox.email === "" && messageBox.phoneNum === "") {
        setRegistrationSuccess(true);
    }
}

return (
    <>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="firstName" value={formdata.firstName} onChange={handleChange} onFocus={() => handleFocus("firstName")} placeholder="Enter your First Name" />
                    <div className="error-message">{focus.firstName && alert.firstName}</div>
                </label>
                <label>
                        <input type="text" name="lastName" value={formdata.lastName} onChange={handleChange} onFocus={() => handleFocus("lastName")} placeholder="Enter your Last Name" />
                        <div className="error-message">{focus.lastName && alert.lastName}</div>
                    </label>
                    <label>
                        <input type="text" name="email" value={formdata.email} onChange={handleChange} onFocus={() => handleFocus("email")} placeholder="Enter your email" />
                        <div className="error-message">{focus.email && alert.email}</div>
                    </label>
                    <label>
                        <input type="tel" name="phoneNum" value={formdata.phoneNum} onChange={handleChange} onFocus={() => handleFocus("phoneNum")} placeholder="Enter your Phone Number" />
                        <div className="error-message">{focus.phoneNum && alert.phoneNum}</div>
                    </label>
                    <input type="submit" value={"Register"} className="submit-button" />
                </form>
                <div className="registration-success">
                    {registrationSuccess && (
                        <div>
                            Registration Successful!
                        </div>
                    )}
   </div>
            </div>
        </>
    );
};

export default Forms;