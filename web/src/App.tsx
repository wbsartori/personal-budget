import Navbar from "./components/Navbar/Navbar"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes
} from "react-router-dom";

import './styles/main.css';

import Sidebar from "./components/Sidebar/Sidebar";
import {Home} from "./pages/home/Home";

function App() {

  return (
          <Router>
              <Navbar />
          </Router>
  )
}

export default App
