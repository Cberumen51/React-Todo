import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'
import "../src/components/TodoComponents/Todo.css"

const todo = [
  {
    name: "clean kitchen",
    id: 1,
    finished: false
  },
  {
    name: "take out trash",
    id: 2,
    finished: false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    }
  }

  addToDo = (e, item) => {
    e.preventDefault();
    
    const newItem = {
      name: item,
      id: Date.now(),
      finished: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  toggleItem =itemId => {
    console.log(itemId)

    this.setState({
      todo: this.state.todo.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            finished: !item.finished
          };
        }
        return item;
      })
    })
  }

  clearFinished = e => {
    e.preventDefault();
    console.log(this.state.todo);
    this.setState({
      todo: this.state.todo.filter(item => item.finished === false)
    })
    console.log(this.state.todo)
  }





  render() {
    console.log("rendering...")
    return (
      <div className="App">
        <div className="header">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm  addToDo={this.addToDo}  />
        </div>
        <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;
