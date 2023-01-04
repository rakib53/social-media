import React from "react";

const Resistration = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch("http://localhost:3001/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    event.target.username.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="enter your name" />
        </div>
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

        <button>Register</button>
      </form>
    </div>
  );
};

export default Resistration;
