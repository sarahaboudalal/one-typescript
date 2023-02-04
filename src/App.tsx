import './App.css';
import Button from './components/Button';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Status from './components/Status';

function App() {


  return (
    <div className="App">
      <Greet name='Sarah' isLoggedIn={true} />
      <Status status='success' />
      <Oscar>
        <Heading>And here you are, learning Typescript!</Heading>
      </Oscar>
      <Input handleChange={event => console.log(event.target.value)} />
      <Button handleClick={(event, id) => console.log('i was clicked', event, id)} />
    </div>
  );
}

export default App;
