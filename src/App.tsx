import './App.css';
import { Counter } from './components/class/Counter';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
// import User from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';




function App() {


  return (
    <div className="App">
      <Counter message='the count is'/>
    </div>
  );
}

export default App;
