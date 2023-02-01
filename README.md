# Netphlix

 [In Progress]

This is a replica of the subscription based streaming platform service "Netflix" built on [React](https://reactjs.org/),  [Firebase](https://firebase.com/) as the backend, [fuseJS](https://fusejs.io/), and [Normalize CSS](https://necolas.github.io/normalize.css/)

## Other tools/technology and libraries used

 [Styled Component](https://styled-components.com/) - For styling
 [React Router](https://reactrouter.com/) - For routing

## What I Learned

  1. Project Architecture
  2. How to create Jumbotrons
  3. Clean code structures with the introduction of "fixtures" to store project data
  4. Importance of "macro" when declaring styled components
  5. How to pass props in styled components
  6. The importance of a key in a map function/an iteration element in React
  7. How to create compound components in React
  8. Usefulness of normalize.css
  9. How to reference a constant (a styled component) in styled components
  10. How to use the "as" prop in styled components
  11. How to use "useContext" and "createContext" in React
  12. How to Create a toggle component
  13. Trick code to check the state of an element in React using - "<>{JSON.stringify([context name], null, 2)}</>"
  14. How to style a reactRouter component using styled components
  15. How to render images for static and dynamic web apps
  16. How to set up a firebase project for a production build and a development build
  17. How to feed data to firebase
  18. The trick of keeping initialization files in the context folder

## Errors I Faced

  1. "fatal: not a git repository (or any of the parent directories): .git" - This error was caused by the fact that I had exported a CDPATH environment variable, and one of the sub-directories of a repo happens to be named same as another non-repo-subdir under one of the paths in my CDPATH, and git was trying to find the repo in the non-repo-subdir. To fix this, I had to unset the CDPATH environment variable.

  2. "Error: A "Route" is only ever to be used as the child of "Routes" element" - This error was caused by the fact that I had nested a "Route" element inside another "Route" element. To fix this, I had to remove the nested "Route" element and place it outside the parent "Route" element.

  3. "export 'firestore' (imported as 'firebase') was not found in 'firebase'" - This error was caused by the fact that I had imported the "firestore" from "firebase/app" instead of "firebase/compat/app". To fix this, I had to import the "firestore" from "firebase/compat/app".

## Current Error
  
  1. Non Yet

## [View Project](https://netphlix-yasirgaji.vercel.app/)
