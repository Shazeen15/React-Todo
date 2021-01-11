// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    console.log(this.props.listItems.id);
    return (
      <div>
        {this.props.listItems.map((item) => (
          <Todo
            key={item.id}
            item={item}
            handleLineThrough={this.props.handleLineThrough}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;

// const TodoList = () => {
//   return (
//     <div>
//       {this.props.listItems.map((item) => (
//         <Todo
//           key={item.id}
//           item={item}
//           handleLineThrough={this.props.handleLineThrough}
//         />
//       ))}
//     </div>
//   );
// };
// export default TodoList;
