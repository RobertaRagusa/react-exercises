import React from "react";
import { useForm } from "./useForm";

export function HookForm() {
  const { currentValue, printValue } = useForm();

  return (
    <div>
      <h1>Controlled Form</h1>

      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={currentValue}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={currentValue}
        ></input>
        <input type="checkbox" onChange={currentValue}></input>
        <button onClick={printValue}>Login</button>
      </form>
    </div>
  );
}
