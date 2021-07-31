import Post from "../Post/Post"
import { Link } from "react-router-dom";
import "./Exercise.css"
import NotAllowed from "../NotAllowed/NotAllowed";
export default function Exercise({ user, isFetching, exercises, error }) {
  if (!user) {
    return <NotAllowed />
  }
  return (
    <div className="Exercise">
      <h6 className="intro">My Exercises</h6>

      <Link to="create">
        <button>Add New Exercise</button>
        </Link>
      <div className="feed">
        {isFetching ? <h2>Loading...</h2> : null}
        {exercises?.map((exercise) => (
          <Post exercise={exercise} key={exercise.id} user={user} />
        ))}
      </div>
    </div>
  )
}
