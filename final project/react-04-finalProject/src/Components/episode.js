import React from "react";
import { Link } from "react-router-dom";

function Episode({ episode }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`${episode.id}`}
      className="episode-item"
      key={episode.id}
    >
      <div className="episode-container">
        <div>
          Name: {episode.name}
          <br />
          Air date: {episode.air_date}
          <br />
          Episode: {episode.episode}
        </div>
      </div>
    </Link>
  );
}

export default Episode;
