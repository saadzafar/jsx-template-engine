import Example from "./components/Example";
import Another from "./components/Another";
export default function App() {
  return (
    <div>
      <h1>Hello, World</h1>
      <p>
        This document was generated using JSX as template engine without using
        React or Virtual DOM 🤯
      </p>
      <h2>Testing custom component with event listener:</h2>
      <Example onClick={() => console.log("clicked")} test={"foo"} />
      <h2>Testing repeated component insertion:</h2>
      <Another />
      <Another />
      <Another />
    </div>
  );
}
