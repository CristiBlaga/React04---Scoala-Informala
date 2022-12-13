import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const EpisodeDetails = () => {
  const id = useParams();
  let a = Object.values(id);
  let b = parseInt(a);
  const episodes = useSelector((state) => state.episodesReducer);
  let currentEpisode = episodes.find((item) => item.id === b);
  return (
    <div className="episode-details-container">
      <div className="episode-details-card">
        <span>Episode name : {currentEpisode.name}</span>
        <span>Air date : {currentEpisode.air_date}</span>
        <span>Number of Characters : {currentEpisode.characters.length}</span>
        <span>Episode number: : {currentEpisode.id}</span>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/episodes"}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default EpisodeDetails;
