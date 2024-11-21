
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './componates/login/Login'; // Assurez-vous que le chemin est correct
import Shop from './Shop'; // Assurez-vous que le chemin est correct


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
         <Route path='/' element={<Shop />} />

        
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
