import './App.css';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';


function App() {


  return (
    <div className="App">
      <LoggedIn />
      <User />
      <Counter />
    </div>
  );
}

export default App;
