import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MultipleSelectsV1 from './Components/MultipleSelects/MultipleSelectsV1.jsx';
import MultipleSelectsV2 from './Components/MultipleSelects/MultipleSelectsV2.jsx';
import Error from './Components/Error/Error.jsx';
import './App.module.css';

import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index exact path='/' element={<Home />}> </Route>
        <Route exact path='/v1' element={<MultipleSelectsV1 />}></Route>
        <Route exact path='/v2' element={<MultipleSelectsV2 />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
