import React, { Component } from 'react'
import axios from 'axios';

export default class TodoForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
          todos:[],
          currentTodo:{
            text:"",
            key:""
          }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    };

    url = "http://localhost:8080/Tasks";

    handleInput = e => { 
        this.setState({
          currentTodo:{
            text:e.target.value, 
            key:Date.now()
          }
        }
    )};
    
    addTodo = e => { 
        e.preventDefault();
        const newTodo = this.state.currentTodo;
        if(newTodo.text !== ""){
          const newTodos = [...this.state.todos, newTodo];
          console.log(newTodos);
          axios.post(this.url,{
            task:newTodo.text,
            id:newTodo.key
          });
          this.setState(
            {
              todos:newTodos,
              currentTodo:{
                text:"",
                key:""
              }
            }
          )
        };
    };

    render() {
        return ( 
            <form id = "todoForm" onSubmit = {this.addTodo}>
                <input type = "text" placeholder = "Enter task ..." value = {this.state.currentTodo.text} onChange = {this.handleInput} />
                <button type = "submit">Add</button>
            </form>
        )
    }
}
