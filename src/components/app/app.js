import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./style.css";

const App = () => {
  const todos = [
    { label: "Drink Coffee", important: false, key: 1 },
    { label: "Create React App", important: true, key: 2 },
    { label: "Watch TV", important: false, key: 3 }
  ];

  return (
    <div className="container">
      <AppHeader todo="1" done="3" />
      <div className="controls input-group">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
