import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Sarah',
    last: 'Abou Dalal'
  }
  const nameList = [
    {
      first: 'Heba',
      last: ' AD'
    },
    {
      first: "Mohammed",
      last: "AD"
    },
    {
      first: "Taha",
      last: "AD"
    }
  ]
  return (
    <div className="App">
      <Greet name='Sarah' age={23} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList} />
    </div>
  );
}

export default App;
