import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}
const StartComponent = ({ totalStars }) => {
  const [star, setStar] = useState(0);
  return (
    <>
      {createArray(totalStars).map((d, i) => (
        <Star key={i} selected={star > i} onSelect={() => setStar(i + 1)} />
      ))}
      <p>
        selected {star} out of {totalStars}
      </p>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <StartComponent totalStars={5} />
    </div>
  );
}

export default App;
