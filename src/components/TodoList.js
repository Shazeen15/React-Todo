// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <p>To Do List</p>
        {this.props.task.map((t) => (
          <Todo
            key={t.id}
            task={t}
            handleLineStrike={this.props.handleLineStrike}
          />
        ))}
      </div>
    );
  }
}
