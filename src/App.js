import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import './App.css';
import Characters from './Components/ClassComponent.js'
import Books from './Components/BookParent'
import Message from './Components/UseState';
import MessageObj from './Components/UseStateObj'
import UseCaseFetchApi from './Components/UseCaseFetchApi'
import UseCaseInputValidation from './Components/UseCaseInputValidation'
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">

    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to='/' className="nav-link"> Home </Link></li> 
        <li><Link to='/about' className="nav-link">About</Link></li>
      </ul>
      </nav>
      <hr />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>

    <UseCaseFetchApi/>
    <UseCaseInputValidation/>
    <Message/>
    <MessageObj/>

    </div>
  );
}

export default App;
