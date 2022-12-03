// import UncontrolledLogin from "./UncontrolledLogin";

import Welcome from "./Welcome";
import Sum from "./Sum";

function App() {
  const numbers = [1, 2, 3, 4];
  return (
    <div className="App">
      <Welcome />

      <Sum numbers={numbers} />
    </div>
  );
}

export default App;
