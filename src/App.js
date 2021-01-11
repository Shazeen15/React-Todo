import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const listItems = [
  {
    task: "Learn setState",
    id: Math.round(Math.random() * 900000),
    completed: false,
  },
  {
    task: "Learn React Class",
    id: Math.round(Math.random() * 900000),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listItems: listItems,
    };
  }

  handleLineThrough = (itemId) => {
    this.setState({
      listItems: this.state.listItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  // add button
  handleAdd = (TodoItem) => {
    const newToDo = {
      task: TodoItem,
      id: Math.round(Math.random() * 900000),
      completed: false,
    };

    const newListItems = [...this.state.listItems, newToDo];

    this.setState({
      listItems: newListItems,
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList
          listItems={this.state.listItems}
          handleLineThrough={this.handleLineThrough}
        />
        <TodoForm handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
