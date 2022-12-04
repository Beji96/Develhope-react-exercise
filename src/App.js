import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import GithubUser from "./GithubUser";

import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/counter" element={<Welcome />} />
        <Route path="/user" element={<GithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
