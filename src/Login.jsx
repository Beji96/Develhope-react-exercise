import { useState } from "react";

import React from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          value={data.username}
          type="text"
          name="username"
          onChange={changeHandler}
        />
        <input
          value={data.password}
          type="password"
          name="password"
          onChange={changeHandler}
        />
        <input
          checked={data.remember}
          type="checkbox"
          name="remember"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default Login;
