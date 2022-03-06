import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges  from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' components= {<Home/>}/>
        <Route path='/competences' components= {<Knowledges/>}/>
        <Route path='/portfolio' components= {<Portfolio/>}/>
        <Route path='/contact' components= {<Contact/>}/>
        <Route path= '/' components= {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;