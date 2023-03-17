import React from "react";

const SearchInput = ({ searchQuery, setSearchQuery, className = "" }) => {
  return (
    <div
      className={`input-group mx-auto ${className}`}
      style={{ width: "90%", maxWidth: "600px" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="What do you want to hear?"
        aria-describedby="basic-addon2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="input-group-append">
        <button className="btn btn-success" type="button">
          search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
