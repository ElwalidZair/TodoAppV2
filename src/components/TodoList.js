import React from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import TodoForm from './TodoForm';

class TodoList extends React.Component{


  render(){
    return (
      <div className = "app">
        <TodoForm /> 
        <TodoItem />
      </div>
    );
  }
};

export default TodoList;
