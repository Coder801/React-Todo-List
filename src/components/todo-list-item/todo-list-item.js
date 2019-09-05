import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const TodoListItem = ({
  label,
  done,
  important,
  onDeleted,
  onToggleDone,
  onToggleImportant
}) => {
  let itemClassName = "todo-list-item-label";
  if (done) {
    itemClassName += " done";
  }

  if (important) {
    itemClassName += " important";
  }

  return (
    <span>
      <span className={itemClassName} onClick={onToggleDone}>
        {label}
      </span>
      <span className="btn-group pull-right">
        <button
          type="button"
          className="todo-list-item-button btn btn-outline-success btn-sm"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="todo-list-item-button btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </span>
  );
};

TodoListItem.propTypes = {
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired
};

export default TodoListItem;
