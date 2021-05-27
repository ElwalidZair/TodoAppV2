import React from 'react';
import './TodoItem.css';
import {AiFillDelete} from 'react-icons/ai'; 
import axios from 'axios';

const TodoItem = ({todo, todos, setTodos}) => {

  const url = "http://localhost:8080/Tasks";

  const deleteTodo = id => {
    axios.delete(`${url}/${id}`)
    .then(()=>{
        const filteredTodos = todos.filter(todo => 
        todo.id!==id
     );
      setTodos(filteredTodos);
    })
  };

  const updateTodo = (task, id) => {
    todos.map(todo=>{
      if(todo.id === id){
        todo.text = task;
      }
    });
    setTodos(todos);
    axios.put(`${url}/${id}`, todos)
    .then((res)=>{
      console.log(res);
    })
  };
//use ids
  return  (
            <div className="list" > 
                   <p>
                       <input
                              type = "text"
                              defaultValue = {todo.text}
                              onChange = {(e)=>{ updateTodo(e.target.value,todo.id)}}
                       />
                       <span>
                           <AiFillDelete onClick={() => deleteTodo(todo.id)} className="delete-icon"/>
                       </span>
                   </p>
            </div>
  );
}
export default TodoItem;