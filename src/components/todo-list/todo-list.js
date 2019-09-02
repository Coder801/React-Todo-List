import React from "react";
import PropTypes from "prop-types";

import TodoListItem from "../todo-list-item/";

const TodoList = ({ todos }) => {
  const elements = todos.map(({ key, ...props }) => (
    <li className="list-group-item" key={key}>
      <TodoListItem {...props} />
    </li>
  ));

  return <ul className="list-group">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
