export function Result(props: { success: boolean }) {
  console.log(props);
  return <div>{props?.success ? <div>Success!</div> : <div>Failure!</div>}</div>;
}
