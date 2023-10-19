export default function Example(props) {
  const { test, onClick } = props;

  return (
    <div>
      <div>
        <span>test props value: {test}</span>
      </div>
      <div>
        <button onClick={onClick}>Log (see in console)</button>
      </div>
    </div>
  );
}
