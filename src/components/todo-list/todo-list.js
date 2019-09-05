import React from "react";
import PropTypes from "prop-types";

import TodoListItem from "../todo-list-item/";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map(({ key, ...props }) => (
    <li className="list-group-item" key={key}>
      <TodoListItem
        {...props}
        onDeleted={() => onDeleted(key)}
        onToggleDone={() => onToggleDone(key)}
        onToggleImportant={() => onToggleImportant(key)}
      />
    </li>
  ));

  return <ul className="list-group">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired
};

export default TodoList;
