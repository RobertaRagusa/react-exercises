import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const { users, error, isLoading, onRefresh } = useGithubUser();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {users && (
        <ul>
          {users.map((user) => {
            return <li key={user.login}>{user.login}</li>;
          })}
        </ul>
      )}
      {error && <h1>An error has occured</h1>}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}
