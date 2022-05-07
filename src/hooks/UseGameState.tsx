import { useState } from 'react';
import { GameState } from '../components/Game';
import { Question } from '../model/Question';
import { getQuestion } from '../services/OpenTDBService';

export function useGameState(): GameState {
  const [gameState, setGameState] = useState({
    isLoaded: false,
  } as GameState);

  useState(() => {
    getQuestion().then(
      (result: Question | undefined) => {
        if (result) {
          setGameState({
            isLoaded: true,
            question: result,
          });
        }
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
