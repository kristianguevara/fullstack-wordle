# Perlon Full-Stack Engineering Challenge

## Instructions

We will be building the game Wordle. 

### 1. Core Functionality

1. The game should be a simple five-letter word guessing game.
2. Users have six attempts to guess the correct word.
3. Feedback should be given for each guess:
- Correct Letter & Correct Position: Highlight in green.
- Correct Letter & Incorrect Position: Highlight in yellow.
- Incorrect Letter: Highlight in gray.
4. The game should reset when the word is guessed correctly or when all attempts are exhausted.
[x] 5. Create an API route that pulls a random word from words.json.

### 3. User Interface
1. Build a responsive UI using Tailwind CSS.
2. Display the input for guesses and show feedback visually for each guess.
3. Include a header with the game title and a footer with instructions or game rules.

### 3. Word Selection Logic

1. Create a list of possible words and randomly select one at the beginning of each game.
2. Ensure the selected word does not change during a game session.

### 4. Keyboard Interaction

1. Allow users to input guesses via a virtual keyboard on the screen or the user's keyboard.
2. The virtual keyboard should provide visual feedback based on the letters guessed.

## Technical Specs
1. Nextjs App Router
2. Tailwind

## Get Started
1. run `npm install`
2. run `npm run dev`
