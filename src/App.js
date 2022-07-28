import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="App App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
