import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./style.css";

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Create React App"),
      this.createTodoItem("Watch TV")
    ]
  };

  createTodoItem(label) {
    return {
      important: false,
      key: uuidv4(),
      done: false,
      label
    };
  }

  togglePropperty(array, id, prop) {
    return array.map(item =>
      item.key === id ? { ...item, [prop]: !item[prop] } : item
    );
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => ({
      todoData: this.togglePropperty(todoData, id, "done")
    }));
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => ({
      todoData: this.togglePropperty(todoData, id, "important")
    }));
  };

  onItemAdded = label => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createTodoItem(label)]
      };
    });
  };

  onDeleted = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(({ key }) => key !== id)
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="controls input-group">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.onDeleted}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}
