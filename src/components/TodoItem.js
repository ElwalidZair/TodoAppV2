import React, { useState } from 'react';
import './TodoItem.css';
import {AiFillDelete} from 'react-icons/ai'; 
import axios from 'axios';

const TodoItem = ({todo, todos, setTodos,setShowModal, passTodo}) => {

  const [isChecked, setIsChecked] = useState(false);

  const url = "http://localhost:8080/Tasks";


  const onDeleteIcon = () => {
    setShowModal(true);
    passTodo(todo);
  }


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

  return  (
            <div className="list" > 
                   <p>
                       <input
                              type = "text"
                              defaultValue = {todo.task}
                              onChange = {(e)=>{ updateTodo(e.target.value,todo.id)}}
                       />
                       <span>
                           <input type="checkbox" />
                           <AiFillDelete onClick={() => onDeleteIcon()} 
                                         className="delete-icon"
                           />
                       </span>
                   </p>
            </div>
  );
}
export default TodoItem;