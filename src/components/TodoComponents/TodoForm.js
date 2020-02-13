import React from 'react'

 class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            todo1: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addToDo(e, this.state.item);
    }

    render(){
        console.log("rendering list", this.state.item)
        return (
            <form onSubmit ={this.submitItem}>
                <input type="text" name="list" onChange={this.handleChanges} />
                <button>Add Item</button>
            </form>
        );
    }
}
export default TodoForm;
