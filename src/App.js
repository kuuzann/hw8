import React from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const handleClick = () => {
    console.log("Кнопка нажата");
  };

  return (
    <div>
      <h1>Пример использования повторно используемых компонентов</h1>
      <Button text="Нажми на меня" onClick={handleClick} />
    </div>
  );
};

export default App;
