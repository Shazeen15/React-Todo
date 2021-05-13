import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  handleCompleted = () => {
    this.props.handleLineStrike(this.props.task.id);
  };
  render() {
    return (
      <div>
        <p
          className={this.props.task.completed ? "completed" : ""}
          onClick={this.handleCompleted}
        >
          {this.props.task.task}
        </p>
      </div>
    );
  }
}
