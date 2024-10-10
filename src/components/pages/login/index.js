import { useState } from "react";
import { Form, Input, Button } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { ROUTE_CONSTANTS } from "../../core/utils/constatns";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import loginImage from "../../images/loginImage.avif";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      navigate(ROUTE_CONSTANTS.LOGIN);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth_container">
      <img src={loginImage} alt="Login" className="auth_image" />
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign in
        </Button>
        <Link to={ROUTE_CONSTANTS.REGISTER}>Sign up</Link>{" "}
      </Form>
    </div>
  );
};

export default Login;
