import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
