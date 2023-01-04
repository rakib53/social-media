import React, { useContext } from "react";
import { myContext } from "../Context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(myContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.email);

        setUser(data.email);
        console.log(user);
        alert(data.message);

        fetch("http://localhost:3001/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input type="email" name="email" placeholder="enter your email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
