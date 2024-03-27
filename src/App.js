import logo from './spartan.svg';
import './App.css';

const players = [
  { id: 1, name: 'Stephen Curry', team: 'Warriors', isAvailable: true },
  { id: 2, name: 'Lebron James', team: 'Lakers', isAvailable: true },
  { id: 3, name: 'Jayson Tatum', team: 'Celtics', isAvailable: true },
  { id: 4, name: 'Joel Embiid', team: '76ers', isAvailable: false},
  { id: 5, name: 'James Harden', team: 'Clippers', isAvailable: false },
  { id: 6, name: 'Damien Lillard', team: 'Celtics ', isAvailable: false },
];

function NBAplay() {
  const listPlays = players.map(play =>
    <li
      key={play.id}
      style={{
        color: play.isAvailable ? 'green' : 'red'
      }}
    >
      <span>{play.name}</span> - <span>{play.team}</span>

    </li>
  );
  return (
    <ul>{listPlays}</ul>
  )
}

function PlayerButton(){
  return(
    <div> 
      <h2> Want to see what NBA players are plating tonight? </h2>
      <h3> Push the button below to see! </h3>
      <button> Push to see </button>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayerButton />
        <NBAplay />
      </header>
    </div>
  );
};

export default App;
