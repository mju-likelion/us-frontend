import React, { useState } from "react";
import Axios from "axios";
import { useAppContext } from "../../store";
import { setToken } from "store";
import { useHistory, useLocation } from "react-router-dom";
import "./login.css";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

export default function Login() {
  const { dispatch } = useAppContext();

  const [inputs, setInputs] = useState({ username: "", password: "" });

  const location = useLocation();

  const history = useHistory();

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/" },
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = inputs;

    Axios.post("http://localhost:8000/accounts/token/", data)
      .then((response) => {
        const {
          data: { token: jwtToken },
        } = response;

        dispatch(setToken(jwtToken));
        history.push(loginRedirectUrl);
      })
      .catch((error) => {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "아이디/암호를 확인해주세요.",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />,
          });
        }
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
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="group">
          <input
            id="UserName"
            required
            type="text"
            name="username"
            minLength="3"
            maxLength="20"
            onChange={onChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="UserName">User Name</label>
        </div>
        <div className="group">
          <input
            id="password"
            required
            type="password"
            name="password"
            minLength="6"
            maxLength="20"
            onChange={onChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}
