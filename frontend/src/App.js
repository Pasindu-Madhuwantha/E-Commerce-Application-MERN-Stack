import React, { useEffect, useState } from 'react'


import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';


import ProtectedRoute from './components/route/ProtectedRoute';
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
      <Route path="/password/reset/:token" component={NewPassword} exact />
      <Route path="/password/forgot" component={ForgotPassword} exact />
      <ProtectedRoute path="/me" component={Profile} exact></ProtectedRoute>
      <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
      <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

 <Footer/>

    </div>
    </Router>
  );
}

export default App;
