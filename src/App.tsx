import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from './store'
import { RoutesConstent } from './constents/routes';
import './App.css'

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConstent.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
