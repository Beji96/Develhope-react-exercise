
import './App.css';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
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
   <ClickTracker/>
  </div>
 )
}

export default App;
