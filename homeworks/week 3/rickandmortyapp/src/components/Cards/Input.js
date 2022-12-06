import React from "react";

const Input = ({ name, changeID, total }) => {
  return (
    <div className="input">
      <select onChange={(e) => changeID(e.target.value)} id={name}>
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Input;
