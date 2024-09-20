import { useReducer } from "react";
import "./App.css";
const initialState = {
  message: "kabilan",
};
function reducer(state, action) {
  switch (action.type) {
    case "kabilan":
      return {
        message: "ohh Kabilan! You are great!!",
      };
    case "karpagam":
      return {
        message: `you should be blessed to have your brother ${state.message}`,
      };
    default:
      return {
        message: "Nothing",
      };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: "kabilan" })}>kabilan</button>
      <button onClick={() => dispatch({ type: "karpagam" })}>karpagam</button>
    </>
  );
}

export default App;
