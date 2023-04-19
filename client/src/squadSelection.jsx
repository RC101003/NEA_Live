import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './squadSelection.css';
import initSqlJs from 'sql.js';

function SquadSelection() {
  const [players, setPlayers] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
    const sql = await initSqlJs();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'football.db', true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      const uInt8Array = new Uint8Array(xhr.response);
      const db = new sql.Database(uInt8Array);
      const res = db.exec('SELECT * FROM players');
      setPlayers(res[0].values);
      db.close();
    };
    xhr.send();
    };
    fetchData();
  }, []);

const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
};

const filteredPlayers = players && players.filter((player) => player[1].toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <React.StrictMode>
      <Navbar />
      <div className="squad-selection">
        <h1>Squad Selection</h1>
        <input type="text" placeholder="Search for a player" onChange ={handleSearchChange}/>
        <p>Click on a player to add them to your squad</p>
        <p>Click on a player in your squad to remove them</p>
        <p>Click on a player in your squad to view their stats</p>
        <div className="player-list">
          {filteredPlayers && filteredPlayers.map((player) => (
              <div key={player[0]} className="player-card">
                  <h2>{player[1]}</h2>
                  <p>Club: {player[2]}</p>
                  <p>Goals: {player[3]}</p>
                  <p>Assists: {player[4]}</p>
                  <p>Points: {player[5]}</p>
              </div>
          ))}
        </div>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <SquadSelection />
);
