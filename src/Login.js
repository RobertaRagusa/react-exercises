import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log(data);

  return (
    <form>
      <input
        name="username"
        placeholder="username"
        value={data.username}
        onChange={handleInputChange}
      ></input>
      <input
        name="password"
        placeholder="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      ></input>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      ></input>
    </form>
  );
}

/*export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = (state) => {
    return console.log(state);
  };

  resetInputs = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };
  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="password"
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        ></input>
        <button
          name="login"
          disabled={!this.state.username || !this.state.password}
          onClick={() => this.onLogin(this.state)}
          style={{
            backgroundColor: this.state.password.length < 8 ? "red" : "green",
          }}
        >
          Login
        </button>
        <button name="reset" onClick={this.resetInputs}>
          Reset
        </button>
      </div>
    );
  }
}*/
