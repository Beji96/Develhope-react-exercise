
import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  const myName = "John"
 return(
  <div className="App">
    <Hello/>
    <Welcome name ={myName} age={26}/>
   <Counter/>
  </div>
 )
}

export default App;
