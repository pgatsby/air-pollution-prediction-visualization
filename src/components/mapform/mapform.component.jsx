import React from "react";

import "./mapform.style.scss";

const MapForm = ({ handleSubmit, handleClick, id }) => (
  <form onSubmit={handleSubmit}>
    <button
      className={"btn btn-primary " + (id == 1 ? "active" : "")}
      name="id"
      value={1}
      onClick={handleClick}
      type="submit"
    >
      Change State of Map to 1
    </button>
    <button
      className={"btn btn-primary " + (id == 2 ? "active" : "")}
      name="id"
      value={2}
      onClick={handleClick}
      type="submit"
    >
      Change State of Map to 2
    </button>
  </form>
);

export default MapForm;
