import React from "react";
import Cell from "./cell";

type RowProps = {
  userWords: string[];
  currentGuess: string;
  selectedWord: string;
  gameOver: boolean;
};

const TRIES = 6;

export default function Rows({ userWords, currentGuess, selectedWord, gameOver }: RowProps) {
  const feedback = (word: string) =>
    word.split("").map((letter, index) => {
      if (letter === selectedWord[index]) return "green";
      if (selectedWord.includes(letter)) return "yellow";
      return "gray";
    });

  const emptyRows = Array(TRIES - userWords.length - (gameOver ? 0 : 1)).fill("");

  return (
    <div className="space-y-2">
      {userWords.map((word, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {word.split("").map((letter, index) => (
            <Cell key={index} letter={letter} status={feedback(word)[index]} />
          ))}
        </div>
      ))}

      {!gameOver && (
        <div className="grid grid-cols-5 gap-2">
          {currentGuess.split("").map((letter, index) => (
            <Cell key={index} letter={letter} status="current" />
          ))}
          {Array(5 - currentGuess.length)
            .fill("")
            .map((_, index) => (
              <Cell key={index + currentGuess.length} />
            ))}
        </div>
      )}

      {emptyRows.map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <Cell key={index} />
            ))}
        </div>
      ))}
    </div>
  );
}
