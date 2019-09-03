import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1 className="app-header-title">My Todo Header</h1>
      <h2 className="app-header-info">
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

AppHeader.propTypes = {
  todo: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired
};

export default AppHeader;
