import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function EditUser() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialName = queryParams.get("name");
  const initialEmail = queryParams.get("email");
  const initialPhone = queryParams.get("phnnumber");

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);

  useEffect(() => {
    const query = new URLSearchParams({
      name: name,
      email: email,
      phone: phone,
    }).toString();
    window.history.replaceState(null, null, `?${query}`);
  }, [name, email, phone]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h1>Edit User Information</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </form>
    </div>
  );
}

export default EditUser;
