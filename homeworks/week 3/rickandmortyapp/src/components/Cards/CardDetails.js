import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, gender, species, status, type } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="characterDetails">
      <h1>{name}</h1>
      <img src={image} alt="No data"></img>
      <span>Location: {location?.name}</span>

      <span>Gender: {gender}</span>

      <span>Species: {species}</span>

      <span>Status: {status}</span>

      <span>Type: {type === "" ? "Unknown" : type}</span>
    </div>
  );
};

export default CardDetails;
