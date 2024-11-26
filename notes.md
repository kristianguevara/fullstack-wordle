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

-----

# Other improvements
1. Separation of concerns
The page.tsx file has a mix of UI rendering, state management, and logic. It would be better to separate the logic into custom hooks or utility functions to make the component cleaner and easier to test.

2. Error Handling
Currently, there is minimal error handling in the initializeGame function. If the API request fails, the game could break. Adding proper error handling or a fallback mechanism would make the app more robust.

3. Code Readability
Some parts of the code, like the handleKeyDown function, are tightly coupled and could benefit from modularization. Breaking it into smaller, purpose-specific functions would improve clarity and maintainability. Rows component would also need to be subdivided to different components for better readability.

4. Unit tests
Maybe over-engineering but adding unit tests for the core logic would make the app more reliable 

5. Accessibility
May be completely out of scope but should there be players with disability that require aid (e.g. better visuals), we may need to consider adding standards to make it accessible to everyone

-----

# Reflections
1. Building the app required addressing incremental challenges, such as handling user input, implementing feedback logic, and managing game-over conditions. Tackling these problems step-by-step allowed for faster iteration and debugging. Breaking the project into smaller milestones and focusing on one problem at a time proved to be an effective approach to completing the project.
2. There was some scope creep involved as I explored features in passing. However, staying focused on the core requirements ensured timely completion of the project. A personal observation is that coding while narrating feels different from coding in a focused, reflective environment. This experience highlighted the importance of balancing communication with technical work, especially in collaborative or evaluative contexts.
3. Preparing the app for a Loom demo required not just technical proficiency but also the ability to explain the development process clearly and concisely. Translating code into a narrative helped me appreciate the value of communication skills in software development.
4. Overall, I enjoyed the challenge. While this challenge is a litmus test for problem-solving, design, and communication skills, I feel it may not fully reflect the nuances of real-world development. Real-world scenarios often involve collaboration, iteration, and long-term planning, which differ from the focused nature of an isolated exercise.
