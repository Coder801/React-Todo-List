import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ItemStatusFilter extends Component {
  state = {
    buttons: ["All", "Active", "Done"]
  };

  onFilterItems = event => {
    this.props.onFilterItems(event.target.value);
  };

  render() {
    const { filter } = this.props;

    const buttons = this.state.buttons.map((button, key) => {
      let buttonClass =
        button.toLowerCase() === filter
          ? "btn-primary"
          : "btn-outline-secondary";

      return (
        <button
          value={button.toLowerCase()}
          onClick={this.onFilterItems}
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
  onFilterItems: PropTypes.func.isRequired
};
