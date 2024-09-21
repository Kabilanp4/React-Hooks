import "./App.css";
import { useInput } from "./useInput";
function App() {
  const [soundProps, resetSoundProps] = useInput("");
  const [colorProps, resetColorProps] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value} sounds like ${colorProps.value}`);
    resetSoundProps();
    resetColorProps();
  };
  return (
    <>
      <form onSubmit={submit}>
        <input {...soundProps} type="text" placeholder="Sound..." />
        <input {...colorProps} type="color" />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
