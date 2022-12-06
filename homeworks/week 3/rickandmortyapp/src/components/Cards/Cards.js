import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          className="info"
          key={id}
        >
          <>
            <img src={image} alt="no data" />
            <div>{name}</div>
            <div>Last location:</div>
            <div>{location.name}</div>
            <div>Status: {status}</div>
          </>
        </Link>
      );
    });
  } else {
    display = "No data available";
  }
  return <div>{display}</div>;
};
export default Cards;
