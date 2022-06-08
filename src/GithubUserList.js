import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [user, setUser] = useState([]);

  const users = (e) => {
    e.preventDefault();

    setUser([...user, e.target.elements.input.value]);
  };

  return (
    <div>
      <form onSubmit={users}>
        <input name="input" />
        <button type="submit">Aggiungi</button>
        <ul>
          {user.map((u) => (
            <li>
              <GithubUser username={u} />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
