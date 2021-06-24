import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import axios from 'axios';
import ConfirmationToDelete from '../ConfirmationToDelete';


const TodoList = ({showModal, setShowModal}) => {
    const [todos,setTodos] = useState([]);

    const [todo,setTodo] = useState();


    const url = "http://localhost:8080/Tasks";

    const deleteItem = (id) => {
      axios.delete(`${url}/${id}`)
      .then(()=>{
          const filteredTodos = todos.filter(todo => 
          todo.id!==id
       );
        setTodos(filteredTodos);
      })
      setShowModal(false);
    }

    const passTodo = (todo) => {
      setTodo(todo);
    } 

    useEffect(() => {
      axios.get('http://localhost:8080/Tasks').then(response => response.data)
      .then((data)=>{
        setTodos(data.reverse())
        console.log(data);
      })
    })


    return (
      <div className = "app">
         <TodoForm  
                    todos={todos} 
                    setTodos={setTodos}
         />
        {
          todos.map((todo)=>
         <TodoItem 
                    passTodo={passTodo} 
                    showModal={showModal} 
                    setShowModal={setShowModal} 
                    key={todo.id} 
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos}
         />
          )
        }
         <ConfirmationToDelete 
                    showModal={showModal} 
                    setShowModal={setShowModal} 
                    deleteItem={deleteItem} 
                    todo={todo} 
         />
      </div>
    );
};

export default TodoList;
