import React from "react";
//

const Filter = ({ filterText, count, onChange }) => {
    const handler = e => {
        console.log(e.target.value);
        onChange(e.target.value);
    }
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        onChange={handler}
        type="text"
        className="filter__input"
        value={filterText}
      />
    </div>
  );
};

export default Filter;