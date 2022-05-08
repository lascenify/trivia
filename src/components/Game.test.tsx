import { render, screen } from '@testing-library/react';
import { useGameState } from '../hooks/UseGameState';
import { Game, GameState } from './Game';
jest.mock('../hooks/useGameState');

describe('GameState', () => {
  beforeEach(() => {
    const gameState: GameState = {
      isLoaded: true,
      question: {
        category: 'categoory',
        question: 'question',
        answers: [
          { text: 'a', isCorrect: false },
          { text: 'b', isCorrect: true },
        ],
        correctAnswerIndex: 2,
      },
    };
    (useGameState as jest.MockedFunction<typeof useGameState>).mockImplementation(() => gameState);
  });

  test('has the same question that has been provided', () => {
    render(<Game />);
    expect(screen.getAllByTestId('game-answers')).toHaveLength(2);
  });
});
