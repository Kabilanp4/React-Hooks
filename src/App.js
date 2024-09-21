import { useTrees } from ".";
import "./App.css";

function App() {
  const { trees } = useTrees();
  return (
    <>
      <p>The React Hooks i've learned so far:</p>
      <ul>
        {trees.map((data) => (
          <li key={data.id}>{data.type}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
