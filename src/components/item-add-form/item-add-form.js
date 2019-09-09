import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { label } = this.state;

    if (label) {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ""
      });
    }
  };

  render() {
    return (
      <form className="input-group item-add-form" onSubmit={this.onSubmit}>
        <input
          className="form-control item-add-form-input"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="Add new todo item"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired
};
