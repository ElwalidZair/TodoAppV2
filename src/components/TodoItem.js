import React from 'react';
import './TodoItem.css';
import {AiFillDelete} from 'react-icons/ai'; 
import axios from 'axios';

class TodoItem extends React.Component {

  url = "http://localhost:8080/Tasks";

  deleteTodo = key => {
    axios.delete(`${this.url}/${key}`)
    .then(()=>{
        const filteredTodos = this.state.todos.filter(todo => 
        todo.key!==key
     );
      this.setState({
        todos: filteredTodos
      });
    })
  };

  updateTodo = (task, key) => {
    const todos = this.state.todos;
    todos.map(todo=>{
      if(todo.key === key){
        todo.text = task;
      }
    });
      this.setState({
        todos:todos
      })
    axios.put(`${this.url}/${key}`, todos)
    .then((res)=>{
      console.log(res);
    })
  };

  render(){
    return todos.map(todo => 
            <div className="list" key ={todo.key}>
                   <p>
                       <input type = "text"
                              id={todo.key} 
                              value = {todo.text}
                              onChange = {(e)=>{ this.updateTodo(e.target.value,todo.key)}}
                       />
                       <span>
                           <AiFillDelete onClick={() => this.deleteTodo(todo.key)} className="delete-icon"/>
                       </span>
                   </p>
            </div>
     );
  }
}

export default TodoItem;