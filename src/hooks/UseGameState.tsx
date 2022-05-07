import { useState } from 'react';
import { GameState } from '../components/Game';
import { OpenTDBResponse } from '../model/OpenTDBResponse';

export function useGameState(): GameState {
  const [gameState, setGameState] = useState({
    isLoaded: false,
  } as GameState);

  useState(() => {
    fetch('https://opentdb.com/api.php?amount=1')
      .then((res) => res.json())
      .then(
        (result: OpenTDBResponse) => {
          setGameState({
            isLoaded: true,
            question: result.results[0],
          });
        },
        (error) => {
          setGameState({
            isLoaded: true,
            error,
          });
        }
      );
  });

  return gameState;
}
