import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input, Flex } from "antd";
import { auth } from "../../..//services/firebase";
import { Link } from "react-router-dom";
import {
  regexpValidation,
  ROUTE_CONSTANTS,
} from "../../../core/utils/constatns";
import "./index.css";
import RegisterBanner from "../../../core/images/auth_register.jpg";
// import loginImage from "../../../images/loginImage.avif";
import AuthWrapper from "../../../Components/sheard/AuthWrapper";

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
    // <div className="auth_container">
    //   <img src={loginImage} alt="Login" className="auth_image" />
    <AuthWrapper title="Sign Up" banner={RegisterBanner}>
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
          tooltip="Password must be 6-16 characters long, contain at least one number, one special character (!@#$%^&*), and a mix of letters."
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
        <Form.Item
          label="Config Password"
          name="confirm"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Config Password" />
        </Form.Item>

        <Flex align="flex-end" gap="10px" justify="flex-end">
          <Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>

          <Button type="primary" htmlType="submit" loading={loading}>
            Sign Up
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
    // </div>
  );
};

export default Register;
