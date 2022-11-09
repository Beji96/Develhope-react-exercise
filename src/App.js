
import './App.css';

function App() {
  function hello (name){
    return <h1> hello {name}</h1>
  }
  return (
    <div className="App">
      {hello("flavius")}
    </div>
  );
}

export default App;
