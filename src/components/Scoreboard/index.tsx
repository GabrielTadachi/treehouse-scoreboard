import { useEffect, useRef, useState } from "react";
import IPlayer from "../../types/player";
import AddPlayerForm from "../AddPlayerForm";
import Header from "../Header";
import Player from "../Player";

const Scoreboard = () => {
  const [players, setPlayers] = useState<IPlayer[]>([
    {
      name: "Tadachi",
      score: 0,
      id: 1
    },
    {
      name: "Vinicius",
      score: 0,
      id: 2
    },
    {
      name: "Laura",
      score: 0,
      id: 3
    },
    {
      name: "Sorlig",
      score: 0,
      id: 4
    },
  ]);

  const [highScore, setHighScore] = useState(0);
  const nextPlayerId = useRef(players.length)

  useEffect(() =>{
    const scores = players.map(p => p.score);
    setHighScore(Math.max(...scores));
  }, [players]);

  const handleRemovePlayer = (id: number) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id: number, delta: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((p) => {
        if (p.id === id) {
          return {
            name: p.name,
            score: (p.score === 0 && delta === -1) ? p.score : p.score + delta,
            id: p.id,
            isHighScore: false
          };
        }

        return p;
      })
    );
  };

  const handleAddPlayer = (name: string) => {
    nextPlayerId.current++;
    
    setPlayers((prevPlayers) => [...prevPlayers, { 
      name,
      score: 0,
      id: nextPlayerId.current,
      isHighScore: false
    }]);
  }

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />

      {players.map((player) => (
        <Player key={player.id.toString()} player={player} isHighScore={ player.score === highScore && highScore !== 0 }  removePlayer={handleRemovePlayer} changeScore={handleScoreChange}
        />
      ))}

      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default Scoreboard;