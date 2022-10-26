import logo from './logo.svg';
import './App.css';
import Join from './compo/join';
import Login from './compo/login';
import Main from './compo/main';
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App () {
  return (
    <>
    <Routes>
    <Route path='/' element={<Join></Join>}></Route>
    <Route path='/Login' element={<Login></Login>}></Route>
    <Route path='/Main' element={<Main></Main>}></Route>
    </Routes>
    </>
  )
}


export default App;
