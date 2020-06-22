import React from 'react';
import './App.css';
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'
import Footer from './components/footer';

function App() {
  return (
    
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>

  );
}

export default App;
