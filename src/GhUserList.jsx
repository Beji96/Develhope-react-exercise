import { Link, Outlet } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function GhUserList({ data, username }) {
  return (
    <div>
      <Link to={`${username}`}>
        {data && (
          <div key={data.id}>
            <h3>{data.name}</h3>
            <img src={data.avatar_url} alt="profile pic" />
          </div>
        )}
      </Link>
      <Outlet />
    </div>
  );
}
