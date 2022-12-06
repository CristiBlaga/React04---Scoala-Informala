import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Input from "../Cards/Input";
const Episodes = () => {
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div>
      <h1>
        Episode name : <span>{name === "" ? "Unknown" : name}</span>
      </h1>
      <h4>Air Date: {air_date === "" ? "Unknown" : air_date}</h4>
      <div>
        <h4>Pick Episode</h4>
        <Input name="Episode" changeID={setID} total={51} />
      </div>
      <div className="container">
        <Cards page="/Episodes/" results={results} />
      </div>
    </div>
  );
};

export default Episodes;
