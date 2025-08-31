import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();

  return <h1>Viewing Post ID: {postId}</h1>;
}
