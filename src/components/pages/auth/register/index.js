import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input, Flex } from "antd";
import { auth, db } from "../../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  regexpValidation,
  ROUTE_CONSTANTS,
} from "../../../core/utils/constatns";
import "./index.css";
import registerBanner from "../../../core/images/auth_register.jpg";
// import loginImage from "../../../images/loginImage.avif";
import AuthWrapper from "../../../Components/sheard/AuthWrapper";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    setLoading(true);
    const { firstName, lastName, email, password } = values;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response, "response");
      const { uid } = response.user;
      const createdDoc = doc(db, "registeredUsers", uid);
      await setDoc(createdDoc, {
        firstName,
        lastName,
        email,
      });

      navigate(ROUTE_CONSTANTS.LOGIN);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Sign up" banner={registerBanner}>
      <Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input type="text" placeholder="First Name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your Last Name!" }]}
        >
          <Input type="text" placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          tooltip="Password must be 6-16 characters long, contain at least one number, one special character (!@#$%^&*), and a mix of letters."
          rules={[
            { required: true, message: "Please input your password!" },
            { pattern: regexpValidation, message: "Wrong password" },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Flex align="flex-end" gap="10px" justify="flex-end">
          <Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign up
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Register;
