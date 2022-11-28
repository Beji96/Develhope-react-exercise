
import './App.css';
import ClickCounter from './ClickCounter';
// import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  const myName = "John"
 return(
  <div className="App">
    <Hello/>
    <Welcome name ={myName} age={26}/>
   {/* <Counter/> */}
   <ClickCounter/>
  </div>
 )
}

export default App;
