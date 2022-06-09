import { useState } from "react";
import { Link } from "react-router-dom";

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
          {user.map((u, index) => (
            <li key={index}>
              <Link to={`/users/${user}`}>{u}</Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
