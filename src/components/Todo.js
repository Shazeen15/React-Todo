import React from "react";

class Todo extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {};
  //   }

  handleClick = () => {
    console.log(this.props.item.id);
    this.props.handleLineThrough(this.props.item.id);
  };

  render() {
    return (
      <div>
        <p
          onClick={this.handleClick}
          className={this.props.item.completed ? "completed" : ""}
        >
          {this.props.item.task}
        </p>
      </div>
    );
  }
}
export default Todo;
