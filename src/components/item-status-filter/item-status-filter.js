import React from "react";

const ItemStatusFilter = () => {
  return (
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button">
        All
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Active
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
