import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data } = useGithubUser(username);

  return <div>{data && <h1>{data.username}</h1>}</div>;
}
