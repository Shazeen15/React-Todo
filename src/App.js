import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleLineStrike = (taskID) => {
    this.setState({
      task: this.state.task.map((t) => {
        if (t.id === taskID) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      }),
    });
  };

  // add task
  addTask = (addedTask) => {
    const newTask = {
      task: addedTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      task: [...this.state.task, newTask],
    });
  };

  // clear button
  handleClear = () => {
    const newTaskList = this.state.task.filter((t) => {
      return !t.completed;
    });

    this.setState({
      task: newTaskList,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          task={this.state.task}
          handleLineStrike={this.handleLineStrike}
        />
        <TodoForm addTask={this.addTask} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
