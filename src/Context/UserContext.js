import React, { createContext, useState } from "react";

export const myContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState("sdsd");

  console.log(user);

  return (
    <myContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default UserContext;
