import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      {}
      <Header />

      {}
      <main className="main-content">
        <Outlet />
      </main>
      
      {}
    </div>
  );
}

export default App;