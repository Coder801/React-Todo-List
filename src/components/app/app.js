import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./style.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, done: false, key: 1 },
      { label: "Create React App", important: true, done: false, key: 2 },
      { label: "Watch TV", important: false, done: false, key: 3 }
    ]
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const newState = todoData.map(item => {
        if (item.key === id) {
          item.done = !item.done;
          return item;
        }
        return item;
      });

      return {
        todoData: newState
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newState = todoData.map(item => {
        if (item.key === id) {
          item.important = !item.important;
          return item;
        }
        return item;
      });

      return {
        todoData: newState
      };
    });
  };

  onItemAdded = label => {
    this.setState(({ todoData }) => {
      const newItem = {
        important: false,
        key: Date.now(),
        done: false,
        label
      };

      return {
        todoData: [...todoData, newItem]
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
    return (
      <div className="container">
        <AppHeader todo={1} done={3} />
        <div className="controls input-group">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.onDeleted}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}
