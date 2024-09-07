import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Landing from './Pages/Landing';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <div id='navigation' className='z-20 h-[5rem] bg-neutral-200 '>
        <h1>appbars</h1>
      </div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
