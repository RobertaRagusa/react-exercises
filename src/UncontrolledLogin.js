import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  handleFocus = () => {
    this._formRef.current.elements.username.autoFocus = true;
  };

  render() {
    return (
      <div>
        <h3>My UncontrolledLogin Form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input name="username" autoFocus={this.handleFocus} />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
