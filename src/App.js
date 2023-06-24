import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import EditUser from './edituser';


function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='main' element={<Main/>}/>
    <Route path='edituser' element={<EditUser/>}/>
    </Routes>
    </Router>
  );
}

export default App;
