import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      creds: {
        username: "",
        password: ""
      },
      user: {},
      message: ""
    };
  }

  changeHandler = event => {
    this.setState({
        creds: {
            ...this.state.creds, [event.target.name]: event.target.value
        }
    })
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default Login;
