import { useState } from "react";
import "./App.css";
import { FetchComponent } from "./FetchComponent";
import { InputComponent } from "./InputComponent";
function App() {
  const [login, setLogin] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const onClickEnter = () => {
    setLogin("");
    setData(login);
  };
  return (
    <>
      <InputComponent
        login={login}
        handleChange={handleChange}
        onClickEnter={onClickEnter}
      />
      <FetchComponent login={data} />
    </>
  );
}

export default App;
