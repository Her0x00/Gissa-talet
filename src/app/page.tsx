"use client"
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function handleGuess(){
    const guess = parseInt(inputValue, 10);
    console.log(guess)
    if (isNaN(guess)) {
      setMessage("Inga bokstäver endast siffror är tillåtna");
      return;
    }
    if (guess < 0 || guess > 100) {
      setMessage("Ogiltligt nummer försök igen");
      return;
    }
    if (guess < randomNumber) {
      setMessage("För lågt, gissa högre!");
    } else if (guess > randomNumber) {
      setMessage("För högt, gissa lägre!");
    } else {
      setMessage(`Grattis! Du gissade rätt!`);
    }
  };

  return (
    <div>
      <p>{message}</p>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleGuess}>Gissa talet</button>
    </div>
  );
}
