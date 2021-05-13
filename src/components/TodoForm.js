import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      formValue: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      formValue: e.target.value,
    });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.formValue);
    this.setState({
      formValue: "",
    });
  };

  handleClearBTN = (e) => {
    e.preventDefault();
    this.props.handleClear();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTask}>
          <label htmlFor="task">Task</label>
          <input
            id="task"
            type="text"
            onChange={this.handleChange}
            value={this.state.formValue}
          />
          <button>Add Task</button>
        </form>
        <button onClick={this.handleClearBTN}>Clear List</button>
      </div>
    );
  }
}
