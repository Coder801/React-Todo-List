import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <button
      type="button"
      className="item-add-form-btn btn btn-primary btn-lg btn-block"
      onClick={() => onItemAdded("Some text")}
    >
      Add Item
    </button>
  );
};

ItemAddForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired
};

export default ItemAddForm;
