import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           "Prefiro acreditar que eu seja um estímulo para eles"
        </p>
        <a
          className="App-link"
          href="https://bigbangtheory.fandom.com/wiki/Sheldon_Cooper"
          target="_blank"
          rel="noopener noreferrer"
        >
         Sheldon Cooper
        </a>
      </header>
    </div>
  );
}

export default App;
