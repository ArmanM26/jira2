import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input } from "antd";
import { auth } from "../../services/firebase";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utils/constatns";
import "./index.css";
import loginImage from "../../images/loginImage.avif";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleRegister = async (values) => {
    setLoading(true);
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth_container">
      <img src={loginImage} alt="Login" className="auth_image" />

      <Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your First Name",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last Name",
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email",
            },
          ]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
            {
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: "Wrong Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign Up
          </Button>
          <Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
