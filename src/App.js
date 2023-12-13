import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import "./pages/home/home.css";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Profile from './pages/proflie/profile';
import MyPost from './pages/myposts/myposts';



const App =  ()=>  {
  return (
    
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myPost" element={< MyPost/>}/>

      </Routes>
    </Router>
  
    
  );
}

export default App;
