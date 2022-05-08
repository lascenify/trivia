import { useState } from 'react';
import { useGameState } from '../hooks/UseGameState';
import { Question } from '../model/Question';
import { Result } from './Result';
import logo from '../icons/logo.jpg';
export interface GameState {
  isLoaded: boolean;
  question?: Question;
  error?: { message: string };
}
export function Game() {
  const gameState: GameState = useGameState();
  const [selectedAnswer, setSelectedAnswer] = useState(gameState?.question?.answers[0]);
  const [responseSent, setResponseSent] = useState(false);
  const { error, isLoaded, question } = gameState;
  const correctAnswer = question?.answers.find((answer) => answer.isCorrect);
  if (gameState.error) {
    return <div>Error: {error?.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Game">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{question?.question}</div>
        <ul>
          {question?.answers.map((answer) => {
            return (
              <label>
                <input
                  type="radio"
                  value={answer.text}
                  name="answer"
                  onClick={() => setSelectedAnswer(answer)}
                  data-testid="game-answers"
                />
                {answer.text}
              </label>
            );
          })}
        </ul>
        <button onClick={() => setResponseSent(true)}> Check answer!</button>
        {selectedAnswer && responseSent && <Result success={selectedAnswer === correctAnswer} />}
      </div>
    );
  }
}
