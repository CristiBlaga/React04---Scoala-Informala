import { Link } from "react-router-dom";

const EpisodeDetails = () => {
  let display;
  let episode;

  if (episode) {
    display = <>ceva</>;
    return <>{display}</>;
  } else {
    display = "No data available";
  }
  return (
    <div>
      {display}
      <Link to={"/episodes"}>Go back</Link>
    </div>
  );
};
export default EpisodeDetails;
