import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todos = [
    { label: "Drink Coffee", important: false, key: 1 },
    { label: "Create React App", important: true, key: 2 },
    { label: "Watch TV", important: false, key: 3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todos} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
