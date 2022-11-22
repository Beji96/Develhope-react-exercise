
import Age from './Age';
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  const myName = "Flavius"
 return(
  <div className="App">
    <Hello/>
    <Welcome name ={myName} />

    
  </div>
 )
}

export default App;
