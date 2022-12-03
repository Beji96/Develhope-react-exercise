export default function ClickCount({ click, count }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={click}>add</button>
    </div>
  );
}
