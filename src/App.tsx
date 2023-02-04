import './App.css';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'Sarah'
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
      <Greet name='Sarah' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status='success' />
      <Oscar>
        <Heading>And here you are, learning Typescript!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
