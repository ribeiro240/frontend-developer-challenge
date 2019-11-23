1. Setup
  - This project was bootstrapped with Create-React-App, since it was simple project and it didn't need any specific configurations, then saving development time.
  - According to Create-React-App's github repository, it includes the following:

    - React, JSX, ES6, TypeScript and Flow syntax support.
    - Language extras beyond ES6 like the object spread operator.
    - Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
    - A fast interactive unit test runner with built-in support for coverage reporting.
    - A live development server that warns about common mistakes.
    - A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
    - An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
    - Hassle-free updates for the above tools with a single dependency.  
    - Since the version 2.0, it supports Sass and it only needs a "npm install node-sass --save", in the terminal, and nothing else.  

2. Layout Width
  - Although the mock has a maximum width of 1500 px, it was developed for full desktop width and it's completely responsive, to allow maximum user reach. 
  - The responsiveness is validated until 320px wide screen, without breaking. Below that, it might break.

3. Tools
  - Along the already mentioned Create-React-App, Sass was also used for the styling.

4. Folder Structure
  - Folders were structure according to its contents. Custom hooks are inside the "hooks" folder, components are inside the "components" folder.
  - The App.js and App.scss are in the src folder for logical reasons, since they are the main files in the project.
