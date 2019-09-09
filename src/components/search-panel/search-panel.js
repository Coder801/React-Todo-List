import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = event => {
    const { value: term } = event.target;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};
