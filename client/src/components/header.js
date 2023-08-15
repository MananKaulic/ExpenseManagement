import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
    message.success("Logged Out Successfully");
  };
  const [loginUser, setloginUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setloginUser(user);
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        ExpenseApp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto  user_logout">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <ul className="right-align">
            <li className="nav-item">
              <a className="nav-link" href="#">
                {loginUser && loginUser.name}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link logout_button" href="#">
                <button className="btn btn-secondary" onClick={logoutHandler}>
                  LogOut
                </button>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
