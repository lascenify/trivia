import success from '../icons/success.png';
import failure from '../icons/failure.png';
export function Result(props: { success: boolean }) {
  const logo = props.success ? success : failure;
  const text = props.success ? 'Correct' : 'Wrong';
  return (
    <div className="Result">
      <div className={props.success ? 'Success' : 'Failure'}>
        <img src={logo} alt="logo" />
        {text}
      </div>
    </div>
  );
}
