import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  let next = () => {
    setPageNumber((x) => x + 1);
  };
  return (
    <div className="pages">
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
