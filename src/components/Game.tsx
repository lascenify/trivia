import React from 'react';
import { OpenTDBResponse } from '../model/OpenTDBResponse';
import { Question } from '../model/Question';
interface GameProps {}
interface GameState {
  isLoaded: boolean;
  question?: Question;
  error?: any;
}
export class Game extends React.Component<GameProps, GameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=1')
      .then((res) => res.json())
      .then(
        (result: OpenTDBResponse) => {
          this.setState({
            isLoaded: true,
            question: result.results[0],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, question, error } = this.state;
    if (error) {
      return <div>Error: {error?.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>{question?.question}</div>
          <ul>
            {question?.incorrect_answers?.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
            <li>{question?.correct_answer}</li>
          </ul>
        </div>
      );
    }
  }
}
