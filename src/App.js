import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PremiumPage from "./pages/PremiumPage";

function App() {
  return (
    <div className="App">
      <Router className="content">
        <div>
          <NavLink className="content" exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="content" activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink className="content" activeClassName="active" to="/premium">
            Premium Content
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/premium" element={<PremiumPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
