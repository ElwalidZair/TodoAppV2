import React, { useState } from 'react'
import axios from 'axios';

export default function TodoForm () {

    const [todos, setTodos] = useState([]);

    const [currentTodo, setCurrentTodo] = useState({
      text:"",
      key:""
    });

    const url = "http://localhost:8080/Tasks";

    const handleInput = e => { 
        setCurrentTodo({  
            text:e.target.value, 
            key:Date.now()
        }
    )};
    
    const addTodo = e => { 
        e.preventDefault();
        const newTodo = currentTodo;
        if(newTodo.text !== ""){
          const newTodos = [...todos, newTodo];
          console.log(newTodos);
          axios.post(url,{
            task:newTodo.text,
            id:newTodo.key
          });
          setTodos({
              todos:newTodos,
          });
          setCurrentTodo({
                text:"",
                key:""
          });   
        };
    };
    return ( 
            <form id = "todoForm" onSubmit = {addTodo}>
                <input type = "text" placeholder = "Enter task ..." value = {currentTodo.text} onChange = {handleInput} />
                <button type = "submit">Add</button>
            </form>
    )
}
