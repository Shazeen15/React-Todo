import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>add</button>
          <button>clear</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
