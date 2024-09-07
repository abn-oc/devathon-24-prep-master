import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import TeacherDashboard from './Pages/TeacherDashboard';
import CreateTest from './Pages/CreateTest';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('prep-token');
  return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/teacherdashboard' element={<TeacherDashboard />} />
          <Route path='/teacherdashboard/createtest' element={<CreateTest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
