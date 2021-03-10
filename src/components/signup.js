import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialSignupInfo = {
  username: "",
  password: "",
};
export default function SignupPage() {
  const [signup, setSignup] = useState(initialSignupInfo);
  console.log(signup, "SSSSSSSSSSSSSSSSSSSSSSSSSS");
  const history = useHistory();

  const loginInputChange = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };

  const submitSignupInfo = (event) => {
    event.preventDefault();
    const newSignupInfo = {
      username: signup.username,
      password: signup.password,
      role_name: "guest",
    };
    axios()
      .post("localhost:1111/api/auth/register", newSignupInfo)
      .then((res) => {
        console.log(res.data, "SIGNUP res data.......................");
      })
      .catch((err) => {
        console.log(err, "err err err err");
      });
    history.push("/mainContentPage");
  };

  return (
    <div>
      <div> Signup Form </div>
      <div>
        <form onSubmit={submitSignupInfo}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={signup.username}
            placeholder="username"
            onChange={loginInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signup.password}
            placeholder="password"
            onChange={loginInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
