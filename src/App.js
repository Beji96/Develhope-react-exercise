
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
 return(
  <div className="App">
    <Hello/>
    <Welcome name ="Flavius" age ={26}/>
    
  </div>
 )
}

export default App;
