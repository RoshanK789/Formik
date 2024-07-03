import React, { useState } from 'react';
import Forms from './Components/forms';
import Create from './Components/Create';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import NavBar from './Components/NavBar';
import Edit from './pages/Edit';
import SideBar from './Components/SideBar';
import Author from './pages/Author';
import BookEdit from './pages/BookEdit';
import AuthorEdit from './pages/AuthorEdit';



const App = () => {
  const[id,setId]=useState(0); 
  return (
    <div>
<BrowserRouter> 
<NavBar />
<div className='d-flex '>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home setId={setId} />} />
        <Route path='/Book' element={<Book setId={setId} />} />
        <Route path='/Author' element={<Author setId={setId} />} />
        <Route path='/Edit/:id' element={<Edit id={id}/>} />
        <Route path='/BookEdit/:id' element={<BookEdit id={id} />} />
        <Route path='/AuthorEdit/:id' element={<AuthorEdit id={id} />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      </div>
      </BrowserRouter>

      
     
    </div>
  );
};

export default App;