import { useState } from 'react';
import { GameState } from '../components/Game';
import { Errors } from '../model/Errors';
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
        if (!error) {
          error = { message: Errors.GENERIC_ERROR };
        }
        setGameState({
          isLoaded: true,
          error,
        });
      }
    );
  });

  return gameState;
}
