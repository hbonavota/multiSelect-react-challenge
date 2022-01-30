import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MultipleSelects from './Components/MultipleSelects/MultipleSelects.jsx';
import Error from './Components/Error/Error.jsx';
import './App.module.css';


import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index exact path='/' element={<Home />}> </Route>
        <Route exact path='/v1' element={<MultipleSelects />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
