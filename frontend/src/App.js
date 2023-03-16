
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/user/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Route path="/login" component={Login} />
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
