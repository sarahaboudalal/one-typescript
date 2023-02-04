import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Sarah' age={23} isLoggedIn={ false } />
    </div>
  );
}

export default App;
