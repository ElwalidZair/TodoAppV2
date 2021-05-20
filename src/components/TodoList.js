import React, {useState} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import TodoForm from './TodoForm';

export default function TodoList(){


  const parentFunction=(data_from_child)=>{
    console.log(data_from_child);
  }



  return (
      <div className = "app">
        <TodoForm functionCallFromParent={parentFunction} />
      </div>
  );
  
};

