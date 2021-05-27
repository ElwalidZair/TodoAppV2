import React, {useState} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos,setTodos] = useState([])
    return (
      <div className = "app">
        <TodoForm todos = {todos} setTodos = {setTodos} />
        {
          todos.map((todo)=>
            <TodoItem  key={todo.id} todo = {todo} todos = {todos} setTodos = {setTodos}/>
          )
        }
        
      </div>
    );
};

export default TodoList;
