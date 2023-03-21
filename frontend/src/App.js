import React, { useEffect, useState } from 'react'


import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from './components/user/Profile';

import { loadUser } from "./actions/userActions";
import store  from './store';

function App() {


  useEffect(() =>{
    store.dispatch(loadUser()) //to load loggged in user
  },[])


  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}></Route>
      <Route path="/me" component={Profile} exact></Route>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
