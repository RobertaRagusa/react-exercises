import React from "react";

export function Sum({ numbers = [5, 10, 2, 8] }) {
  const number = numbers;
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return <h1>The sum is: {sum}</h1>;
}
