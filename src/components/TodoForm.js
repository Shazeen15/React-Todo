import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  //   onchange to track what the user is inputing
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  //   onsubmit on the form to add to the list
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.inputValue);

    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            name="item"
            value={this.state.inputValue}
          />
          <button>add</button>
        </form>
        <button>clear</button>
      </div>
    );
  }
}

export default TodoForm;
