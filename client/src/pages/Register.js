import { React, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const submittedValue = async (values) => {
    try {
      setloading(true);

      await axios.post("users/register", values);

      setloading(false);
      message.success("Registration Successfull");
      navigate("/login");
    } catch (error) {
      setloading(false);
      console.log(error);
      message.error("Invalid Inputs! Please try again.");
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <Form
        className="formCenter"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 30 }}
        style={{ maxWidth: 600 }}
        onFinish={submittedValue}
      >
        <h1 className="loginHeader">
          <b>Register</b>
        </h1>
        <Form.Item
          className="inputs"
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
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

        <Form.Item wrapperCol={{ offset: 0, span: 16 }} className="loginbutton">
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <div className="redirect">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Register;
