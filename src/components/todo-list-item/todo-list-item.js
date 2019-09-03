import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black"
  };

  return (
    <span>
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <span className="btn-group pull-right">
        <button
          type="button"
          className="todo-list-item-button btn btn-outline-success btn-sm"
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="todo-list-item-button btn btn-outline-danger btn-sm"
        >
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired
};

export default TodoListItem;
