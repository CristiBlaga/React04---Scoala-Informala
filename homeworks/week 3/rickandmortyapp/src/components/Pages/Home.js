import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <h2>Characters</h2>
      <Card page="/" results={results} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};
export default Home;
