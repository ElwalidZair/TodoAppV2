/*import React from 'react';
import './TodoItem.css';
import {AiFillDelete} from 'react-icons/ai'; 
import axios from 'axios';

export default function TodoItem() {

  const url = "http://localhost:8080/Tasks";

  const deleteTodo = key => {
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

  const updateTodo = (task, key) => {
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

  
  return todos.map(todo => 
            <div className="list" key ={todo.key}>
                   <p>
                       <input type = "text"
                              id={todo.key} 
                              value = {todo.text}
                              onChange = {(e)=>{ updateTodo(e.target.value,todo.key)}}
                       />
                       <span>
                           <AiFillDelete onClick={() => deleteTodo(todo.key)} className="delete-icon"/>
                       </span>
                   </p>
            </div>
     ); 
}*/