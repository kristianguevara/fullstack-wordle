API layer

1. Simple route from nextjs
2. GET /words
3. Straightforward pull - no securities
4. Words maybe 5 just to begin with


UI
- Grid system of tailwind
- Keyboard layout on screen


Step 1
1. Build the 5 x 6 cells first. Also make the design simple
2. Repsonsivenes must be considered
3. Put the event handler - no logic just yet

----

# Other improvements
1. Separateion of concerns
The page.tsx file has a mix of UI rendering, state management, and logic. It would be better to separate the logic into custom hooks or utility functions to make the component cleaner and easier to test.

2. Error Handling
Currently, there is minimal error handling in the initializeGame function. If the API request fails, the game could break. Adding proper error handling or a fallback mechanism would make the app more robust.

3. Code Readability
Some parts of the code, like the handleKeyDown function, are tightly coupled and could benefit from modularization. Breaking it into smaller, purpose-specific functions would improve clarity and maintainability.

4. Unit tests
Maybe over-engineering but adding unit tests for the core logic would make the app more reliable 