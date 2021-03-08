import React from "react";
const initialSignupInfo = {
  username: "",
  password: "",
};
export default function signup() {
  const [signup, setSignup] = useState("initialSignupInfo");
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={signup.username}
        placeholder="username"
        onChange={loginInputChange}
      />
      <button>Submit</button>
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={signup.username}
        placeholder="username"
        onChange={loginInputChange}
      />
      <button>Submit</button>
    </div>
  );
}
