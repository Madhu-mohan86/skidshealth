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
      <h1 className="font-Inter font-bold ml-20 text-2xl mt-10">Edit User Information</h1>
      <form className="mt-10 ml-32">
        <label className="mt-5 mr-5 font-bold font-Inter" htmlFor="name">Name:</label>
        <input
          type="text"
          className="border-2  border-gray-500 rounded-lg mt-5 px-5 py-4 font-semibold"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
         <br/>
        <label className="mt-5 mr-5 font-bold font-Inter" htmlFor="email">Email:</label>
        <input
          type="email"
          className="border-2 border-gray-500 rounded-lg mt-5 px-5 py-4 font-semibold"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      <br/>
        <label className="mt-5 mr-5 font-bold font-Inter" htmlFor="phone">Phone:</label>
        <input
          type="text"
          className="border-2 border-gray-500 rounded-lg mt-5 -ml-2 px-5 py-4 font-semibold"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <button  className="border-2 w-fit px-3 mt-5 ml-[36%] rounded-lg font-bold text-white py-2 font-Inter tracking-wider bg-blue-600">save</button>

      </form>
    </div>
  );
}

export default EditUser;
