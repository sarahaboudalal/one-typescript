import './App.css';
import Box from './components/context/Box';
import ThemeContext from './components/context/ThemeContext';



function App() {


  return (
    <div className="App">
      <ThemeContext>
        <Box />
      </ThemeContext>
    </div>
  );
}

export default App;
