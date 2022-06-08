import { useState } from "react";

export function useForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputs(e) {
    const { name, value, type, checked } = e.target;
    setForm((form) => {
      return {
        ...form,
        [name]: type === "checked" ? checked : value,
      };
    });
  }

  function handleButton() {
    setForm(console.log(form));
  }

  return {
    currentValue: handleInputs,
    printValue: handleButton,
  };
}
