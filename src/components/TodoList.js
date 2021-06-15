import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root')

const TodoList = ({showModal, setShowModal}) => {
    const [todos,setTodos] = useState([]);

    const [todo,setTodo] = useState();

    useEffect(() => {
      axios.get('http://localhost:8080/Tasks').then(response => response.data)
      .then((data)=>{
        setTodos(data)
        console.log(data);
      })
    },[])



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

    return (
      <div className = "app">
        <TodoForm  todos = {todos} setTodos = {setTodos} />
        {
          todos.map((todo)=>
            <TodoItem passTodo={passTodo} showModal={showModal} setShowModal={setShowModal} key={todo.id} todo = {todo} todos = {todos} setTodos = {setTodos}/>
          )
        }
         <Modal isOpen={showModal}> 
          <h1>Confirmation</h1>
          <h5>do you want reaaly to delete this?</h5>
          <button onClick={()=>deleteItem(todo.id)}>Yes</button>
          <button onClick={()=>setShowModal(false)}>Cancel</button>
        </Modal>
      </div>
    );
};

export default TodoList;
