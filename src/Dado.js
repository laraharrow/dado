import React, { useState } from "react";
import "./Dado.css";

const Dado = () => {
  const [number, setNumber] = useState("one");
  const [color, setColor] = useState("Blue");
  const [shake, setShake] = useState(false);
  const [colorOption, setColorOption] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);
  const [diceColor, setDiceColor] = useState([
    "Red",
    "Margent",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
  ]);

  const diceNumber = ["one", "two", "three", "four", "five", "six"];
  const cores = ["Red", "Margent", "Blue", "Green", "Yellow", "Orange"];

  const numberPicker = () => {
    return diceNumber[Math.floor(Math.random() * 6)];
  };

  const colorPicker = () => {
    return diceColor[Math.floor(Math.random() * diceColor.length)];
  };

  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 1000);
  };

  const handleDiceClick = () => {
    setNumber(numberPicker());
    setColor(colorPicker());
    setShake(handleShake);
  };

  const handleHowManyColors = () => {
    setColorOption(!colorOption);
    setDiceColor(cores);
    setSelectedColors([]);
  };

  const handleColorClick = (e) => {
    if (e.target.classList.contains(`color${e.target.value}`)) {
      e.target.classList.remove(`color${e.target.value}`);
      for (var i = 0; i < selectedColors.length; i++) {
        if (selectedColors[i] === e.target.value) {
          selectedColors.splice(i, 1);
        }
      }
    } else {
      e.target.classList.add(`color${e.target.value}`);
      setSelectedColors((oldColors) => [...oldColors, e.target.value]);
    }
  };

  const useSelectedColors = () => {
    if (selectedColors.length === 3) {
      setDiceColor(selectedColors);
      handleDiceClick();
    } else {
      alert("Você precisa selecionar 3 cores");
    }
  };
  return (
    <div className="App">
      <div className="main">
        <i
          onClick={handleDiceClick}
          className={`fas fa-dice-${number} Die ${color} ${shake && "shaking"}`}
        />
        <div className="organizer">
          <button className="button" onClick={handleHowManyColors}>
            {colorOption ? "escolha 3 cores" : "use 6 cores"}
          </button>
        </div>
      </div>
      {!colorOption && (
        <>
          <div className="options">
            <button className="button" id="btn" onClick={useSelectedColors}>
              Use as 3 cores
            </button>
          </div>
          <button
            className="colorList buttonYellow"
            onClick={handleColorClick}
            value="Yellow"
          >
            Amarelo
          </button>
          <button
            className="colorList buttonBlue"
            onClick={handleColorClick}
            value="Blue"
          >
            Azul
          </button>
          <button
            className="colorList buttonOrange"
            onClick={handleColorClick}
            value="Orange"
          >
            Laranja
          </button>
          <button
            className="colorList buttonMargent"
            onClick={handleColorClick}
            value="Margent"
          >
            Margenta
          </button>
          <button
            className="colorList buttonGreen"
            onClick={handleColorClick}
            value="Green"
          >
            Verde
          </button>
          <button
            onClick={handleColorClick}
            className="colorList buttonRed"
            value="Red"
          >
            Vermelho
          </button>
        </>
      )}
    </div>
  );
};

export default Dado;
