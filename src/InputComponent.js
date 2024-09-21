export function InputComponent({ login, handleChange, onClickEnter }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickEnter();
    }
  };
  return (
    <>
      <input
        type="text"
        value={login}
        onChange={handleChange}
        placeholder="Enter GithubId"
        onKeyDown={handleKeyPress}
      />
      <button onClick={onClickEnter}>Enter</button>
    </>
  );
}
