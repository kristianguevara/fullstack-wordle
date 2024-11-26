"use client";

import React, { useEffect, useState } from "react";
import Rows from "./components/rows";

export default function Home() {
  const [selectedWord, setSelectedWord] = useState("");
  const [userWords, setUserWords] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameMessage, setGameMessage] = useState<string | null>(null);

  // Fetch a random word when the component mounts
  const initializeGame = async () => {
    const response = await fetch("/api/words");
    const words = await response.json();
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex].toLowerCase(); // Needed to lower case for validation
    setSelectedWord(word);
    setUserWords([]);
    setCurrentGuess("");
    setGameOver(false);
    setGameMessage(null);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Handle user keyboard input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver) return;

      if (event.key === "Enter") {
        if (currentGuess.length !== 5) {
          setGameMessage("Guess must be a 5-letter word.");
          return;
        }

        setUserWords((prevWords) => [...prevWords, currentGuess]);
        setCurrentGuess("");

        if (currentGuess === selectedWord) {
          setGameMessage("Congratulations! You guessed the word!");
          setGameOver(true);
        } else if (userWords.length === 5) {
          setGameMessage(`Game over! The correct word was "${selectedWord}".`);
          setGameOver(true);
        } else {
          setGameMessage(null);
        }
      } else if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        // Validate if the key pressed is an alphabetic character while ensuring the guess is no longer than 5
        setCurrentGuess((prev) => (prev + event.key).slice(0, 5));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown); // Cleanup that removes the event when unmounting
  }, [currentGuess, gameOver, selectedWord, userWords]);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Wordle</h1>
      {gameMessage && (
        <div
          className={`text-center mb-4 ${
            gameMessage.includes("Congratulations") || gameMessage.includes("Game over")
              ? "text-red-500 font-bold"
              : "text-yellow-600"
          }`}
        >
          {gameMessage}
        </div>
      )}
      <div className="max-w-md w-full bg-white p-4 rounded shadow">
        <Rows
          userWords={userWords}
          currentGuess={currentGuess}
          selectedWord={selectedWord}
          gameOver={gameOver} // Pass gameOver as a prop
        />
      </div>
      <footer className="mt-4 text-center text-gray-600">
        <p>Guess the 5-letter word in 6 tries.</p>
        <p>Press Enter to submit your guess. Backspace to delete.</p>
      </footer>
    </main>
  );
}
