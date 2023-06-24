import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Main() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const email = queryParams.get("email");
  const phnnumber = queryParams.get("phnumber");

  useEffect(() => {
    // You can handle the data passed from the URL here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phnnumber);
  }, [name, email, phnnumber]);

  return (
    <body>
      <h1 className="font-Inter font-bold ml-20 text-2xl mt-10">List of Users</h1>
      <div className="grid grid-cols-2 gap-y-20 ml-20 mt-20 gap-x-0">
        <div className="h-36 w-96 border-2 p-3 rounded-lg border-gray-500">
          <h1 className="font-Inter font-bold text-xl">{name}</h1>
          <p className="font-Inter font-semibold mt-2  text-gray-500 text-base">{email}</p>
          <p className="font-Inter font-semibold mt-2 text-gray-500 text-base">{phnnumber}</p>
          <Link
          to={{
            pathname: "/edituser",
            search: `?name=${name}&email=${email}&phone=${phnnumber}`,
          }}
        >
          <button className="btn-edit">Edit</button>
        </Link>
          </div>
      </div>
    </body>
  );
}

export default Main;
