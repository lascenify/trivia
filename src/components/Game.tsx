import { useGameState } from '../hooks/UseGameState';
import { Question } from '../model/Question';
export interface GameState {
  isLoaded: boolean;
  question?: Question;
  error?: any;
}
export function Game() {
  const gameState: GameState = useGameState();
  const { error, isLoaded, question } = gameState;
  if (gameState.error) {
    return <div>Error: {error?.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>{question?.question}</div>
        <ul>
          {question?.incorrect_answers?.map((answer) => {
            return (
              <label>
                <input type="radio" value={answer} name="answer" />
                {answer}
              </label>
            );
          })}
          <label>
            <input type="radio" value={question?.correct_answer} name="answer" />
            {question?.correct_answer}
          </label>
        </ul>
      </div>
    );
  }
}
