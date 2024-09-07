import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
