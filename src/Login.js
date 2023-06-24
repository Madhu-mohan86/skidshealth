import React, { useState } from "react";

function CustomAlert({ message, onClose }) {
  return (
    <div className="ml-96 mt-5 border-2 border-red-600 bg-red-300 rounded-lg text-red-600 font-bold font-Inter text-lg w-fit p-3">
        <p>{message}</p>
        <button className="ml-64 mt-5  border-2 border-green-900 bg-green-500 text-white  p-1 px-3 text-sm rounded-lg" onClick={onClose}>OK</button>
    </div>
  );
}

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phnumber, setphnumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddUser = () => {
    if (!name || !email || !phnumber) {
      setShowAlert(true);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setShowAlert(true);
      return;
    }


    const url = new URL(window.location.href);
    url.pathname = '/main';
    url.searchParams.set('name', name);
    url.searchParams.set('email', email);
    url.searchParams.set('phnumber', phnumber);

    window.location.href = url.href;
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <body>
      <h1 className="text-center font-bold font-Inter text-2xl m-5 mt-10">
        User Registration
      </h1>
      <div className="flex justify-center">
        <form className="flex flex-col w-96">
          <label className="mt-5 font-bold font-Inter">Name</label>
          <input
            required
            placeholder="Name"
            className="border-2 border-gray-500 rounded-lg mt-2 px-5 py-4 font-semibold"
            type="text"
            value={name}
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
          <label className="mt-5 font-bold font-Inter">E-mail Id</label>
          <input
            required
            placeholder="email"
            className="border-2 border-gray-500 rounded-lg mt-2 p-5 font-semibold"
            type="email"
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <label className="mt-5 font-bold font-Inter">Phone Number</label>
          <input
            required
            placeholder="phone number"
            className="border-2 border-gray-500 rounded-lg mt-2 p-5 font-semibold"
            type="number"
            value={phnumber}
            onChange={(event) => {
              setphnumber(event.target.value);
            }}
          />
          <button
            type="button"
            className="border-2 w-fit px-3 mt-5 rounded-lg font-bold text-white py-2 font-Inter tracking-wider bg-blue-600"
            onClick={handleAddUser}
          >
            Add user
          </button>
        </form>
      </div>
      {showAlert && (
        <div >
        <CustomAlert message="Name should not be empty and email should be in correct form" onClose={handleAlertClose}/>
        </div>
      )}
    </body>
  );
}

export default Login;
