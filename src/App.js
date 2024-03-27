import logo from './spartan.svg';
import './App.css';

function MagicButton(){
  return(
    <button>Magic</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div> 
            <p> I hope this works, lets go Spartans!</p>
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with E.J. and Sparty!
        </a>
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
