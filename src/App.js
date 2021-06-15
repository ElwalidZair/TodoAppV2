import React,{useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
      <div className = "app">
        <TodoList showModal = {showModal} setShowModal = {setShowModal} />
      </div>
  );
  
};

export default App;
