import { useParams } from "react-router-dom";

function Welcome({ name }) {
  let { name = "flavius" } = useParams();
  return (
    <div>
      <p>Welcome {name}!</p>
    </div>
  );
}

export default Welcome;
