// import UncontrolledLogin from "./UncontrolledLogin";

import Container from "./Container";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  return (
    <Container>
      <div className="App">
        {/* <TodoList /> */}
        <Welcome />
        <Login />
        {/* <UncontrolledLogin /> */}
      </div>
    </Container>
  );
}

export default App;
