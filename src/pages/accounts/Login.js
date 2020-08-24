import React, { useState } from "react";
import Axios from "axios";

export default function Signup() {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/accounts/token/", inputs)
      .then((response) => {
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="username" onChange={onChange} />
        </div>
        <div>
          <input type="password" name="password" onChange={onChange} />
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}
