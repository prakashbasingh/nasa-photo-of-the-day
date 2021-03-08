import React from "react";

export default function login() {
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={login.username}
        placeholder="username"
        onChange={loginInputChange}
      />
      <button>Submit</button>
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={login.username}
        placeholder="username"
        onChange={loginInputChange}
      />
      <button>Submit</button>
    </div>
  );
}
