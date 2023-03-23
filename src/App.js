import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import WalletPage from "./pages/WalletPage";

function App() {
  return (
    <div className="App">
      <Router className="content">
        <div className="nav-bar">
          <a
            className="logo-link"
            href="https://magic.link/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="magic-horizontal"
              src="/magic_logo_horizontal.png"
              alt="magic logo"
            />
          </a>
          <div className="nav-links">
            <NavLink className="content" exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink
              className="content"
              activeClassName="active"
              to="/magic-wallet"
            >
              Magic Wallet
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magic-wallet" element={<WalletPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
