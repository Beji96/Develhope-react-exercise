
import './App.css';

function App() {
  const sum =(a,b)=> <h2>{a+b}</h2>;
  return(
    <div className="App">
      {sum(8,9)}
    </div>
  )
}

export default App;
