import React, { useState } from 'react'
import axios from 'axios';

const TodoForm = ({todos, setTodos}) => {
    const [currentTodo, setCurrentTodo] = useState({
      text:"",
      id:""
    });

    const url = "http://localhost:8080/Tasks";

    const handleInput = e => { 
        setCurrentTodo({
            task:e.target.value, 
            id:Math.floor(Math.random() * 50000)
        }
    )};
    
    const addTodo = e => { 
        e.preventDefault();
        const newTodo = currentTodo;
        if(newTodo.task !== ""){
          const newTodos = [...todos, newTodo];
          axios.post(url,{
            task:newTodo.task,
            id:newTodo.id
          });
          setTodos(newTodos);
          setCurrentTodo({
                task:"",
                key:""
          })
        };
    };

    return ( 
        <form id = "todoForm" onSubmit = {addTodo}>
            <input type = "d" placeholder = "Enter task ..." value = {currentTodo.text} onChange = {handleInput} />
            <button type = "submit">Add</button>
        </form>
    )
}

export default TodoForm;