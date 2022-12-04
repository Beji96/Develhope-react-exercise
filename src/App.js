import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome name="Flavius" />} />
      </Routes>
    </div>
  );
}

export default App;
