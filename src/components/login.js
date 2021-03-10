import React, { useState } from "react";

const initialLoginInfo = {
  username: "",
  password: "",
};

export default function LoginPage() {
  const [login, setLogin] = useState(initialLoginInfo);
  console.log(login, "XXXXXXXXXXXXXXXXXXXXXXXXX");

  const loginInputChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div>Login Form</div>
      <div>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={login.username}
            placeholder="username"
            onChange={loginInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="password"
            onChange={loginInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
