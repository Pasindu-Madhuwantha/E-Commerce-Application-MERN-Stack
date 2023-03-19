
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}></Route>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
