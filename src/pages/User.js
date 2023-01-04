import React, { useContext } from "react";
import { myContext } from "../Context/UserContext";

const User = () => {
  const { user } = useContext(myContext);

  console.log(user);

  fetch(`http://localhost:3001/user/`, {
    headers: {
      authorization: `Bearrer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <h1>This is user page</h1>
    </div>
  );
};

export default User;
