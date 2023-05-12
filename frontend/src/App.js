import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import Login from './components/user/Login'
import Dashboard from './components/admin/Dashboard'
import NewInquiry from './components/inquiry/NewInquiry'
import OrdersList from './components/admin/OrdersList'
import ProcessOrder from './components/admin/ProcessOrder'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/newinquiry" component={NewInquiry} exact />
          <Route path="/login" component={Login} exact />
        </div>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/admin/orders" component={OrdersList} exact />
        <Route path="/admin/order/:id" component={ProcessOrder} exact />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
