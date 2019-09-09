import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ItemStatusFilter extends Component {
  state = {
    buttons: ["All", "Active", "Done"]
  };

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.state.buttons.map((button, key) => {
      const label = button.toLowerCase();
      let buttonClass =
        label === filter ? "btn-primary" : "btn-outline-secondary";

      return (
        <button
          onClick={() => onFilterChange(label)}
          className={`btn ${buttonClass}`}
          type="button"
          key={key}
        >
          {button}
        </button>
      );
    });

    return <div className="input-group-append">{buttons}</div>;
  }
}

ItemStatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};
