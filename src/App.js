import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const listItems = [
  {
    task: "Learn setState",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Learn React Class",
    id: 1528817084358,
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

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
