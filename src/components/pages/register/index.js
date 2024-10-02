import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input, notification } from "antd";
import { auth } from "../../services/firbase";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false,
    };
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    const { email, password } = this.state;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error:");
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <fieldset>
          <legend>Register</legend>
          <Form layout="vertical" onSubmit={this.handleRegister}>
            <Form.Item label="First Name">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChangeInput}
              />
            </Form.Item>
            <Form.Item labe="Last Name">
              <Input
                type="text"
                name="LastName"
                placeholder="Last Name"
                onChange={this.handleChangeInput}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="text"
                name="Email"
                placeholder="Email"
                // value={this.state.EmailName}
                onChange={this.handleChangeInput}
              />
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password
                type="password"
                name="Password"
                placeholder="Password"
                onChange={this.handleChangeInput}
              />
            </Form.Item>
            <hr />
            <Button type="primary">
              {loading ? "loading..." : "Register"}
            </Button>
          </Form>
        </fieldset>
      </div>
    );
  }
}

export default Register;
