import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, loading } = useGithubUser(username);

  return (
    <div>
      {data && <h1>{data.username}</h1>}
      {error && <h1>There has been an error</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
