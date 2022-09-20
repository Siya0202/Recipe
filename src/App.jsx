import React from 'react'
import './App.css'
import Login1 from './pages/Login1'
import Sign_up from './pages/Sign_up'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import 'antd/dist/antd.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Home />} />
        <Route  path="Signup" element={<Sign_up />} />
        <Route path="Login" element={<Login1 />} />
      
    </Routes>
  </BrowserRouter>

 
  );
};

export default App;
