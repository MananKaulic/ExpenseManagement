import { React, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const submittedValue = async (values) => {
    try {
      setloading(true);

      const response = await axios.post("users/login", values);
      const data = response.data;

      setloading(false);
      message.success("Logged in successfully");
      localStorage.setItem("user", JSON.stringify({ ...data, password: "" }));
      navigate("/");
    } catch (error) {
      setloading(false);
      console.log(error);
      message.error("Invalid email or passoword");
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <Form
        className="formCenter"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={submittedValue}
      >
        <h1 className="loginHeader">
          <b>Login</b>
        </h1>
        <Form.Item
          className="inputs"
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="inputs"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 0, span: 16 }}
          className="loginbutton inputs"
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <div className="redirect">
          <p>
            Not a User? <Link to="/register">Register here</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Login;
