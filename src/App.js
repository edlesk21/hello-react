import logo from './spartan.svg';
import './App.css';

const players = [
  { id: 1, name: 'Stephen Curry', team: 'Warriors', isAvailable: true },
  { id: 2, name: 'Lebron James', team: 'Lakers', isAvailable: true },
  { id: 3, name: 'Jayson Tatum', team: 'Celtics', isAvailable: true },
  { id: 4, name: 'Joel Embiid', team: '76ers', isAvailable: false},
  { id: 5, name: 'James Harden', team: 'Clippers', isAvailable: false },
  { id: 6, name: 'Damien Lillard', team: 'Bucks ', isAvailable: false },
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

function NBAgames() {
  return(
    <>
    <h2> Games Tonight: </h2>
      <li> Warriors vs. Celtics</li>
      <li> Lakers vs. 76ers </li>
      <li> Clippers vs. Bucks </li>
    </>
  )
  }; 
function PlayerButton(){
  return(
    <div> 
      <h2> Want to see what NBA players are playing tonight? </h2>
      <h3> Push the button below to see! </h3>
      <button> Push to see </button>
    </div>
  )
};

function Injury(){
  return(
    <h4> Injured Players are in Red:  </h4>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayerButton />
        <Injury />
        <NBAplay />
        <NBAgames />
      </header>
    </div>
  );
};

export default App;
