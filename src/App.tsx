import './App.css';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
// import User from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';




function App() {


  return (
    <div className="App">
      <DomRef />
      <MutableRef/>
    </div>
  );
}

export default App;
