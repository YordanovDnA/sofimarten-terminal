Project name ![Image alt text](public/favicon.ico "MEWizard")
========
---
Project short description...

# Setting up

    npm install

  then

    npm start

  The project should automatically start at: [http://localhost:3000](http://localhost:3000)

# Structure
---

Every project need to have a base structure. Here is one sample structure of a project following the best practices:

    .root
      /node_modules
      /public
        favicon.ico
        index.html
        manifest.json
        robots.txt
      /src
        /assets
        /components
        /layouts
        /network
        /pages
        /utils
        global.scss
        index.js
        reportWebVitals.js
        setupTests.js
      .env.development
      .env.production
      .eslintrc
      .gitignore
      package-lock.json
      package.json
      README.me

  ### Understand all folders and files
  ---
  #### ./root
  
  *The **root** directory is the main directory of our project. It usually contains "node_modules", "public", "src" folder and some importatnt files for our project.*

  #### ./node_modules

  *This folder contains all **node modules** that we installed to our project, and many base modules coming when install react using.*

      npx create-react-app app_name

  #### ./public

  *According to create-react-app the **public** folder is normally recommended to import stylesheets, images, fonts from JavaScript.* 

  *The folder is used as a workaround for a number of less common cases:*
   
  * You need a file with a specific name in the build output, such as manifest.webmanifest.

  * You have thousands of images and need to dynamically reference their paths.

  * You want to include a small script like pace.js outside of the bundled code.

  * Some libraries may be incompatible with webpack and you have no other option but to include it as a `<script>` tag.

  > **Note** that if you add a `<script>` that declares global variables, you should read the topic  [Using Global Variables](https://create-react-app.dev/docs/using-global-variables) which explains how to reference them.

  ---

  ##### Files in the public directory:
  
  ---

  **index.html** - The public folder contains the HTML file so you can tweak it, for example, to set the page title. The `<script>` tag with the compiled code will be added to it automatically during the build process.

  ---

  **manifest.json** - It's a [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) that describes your application and it's used by e.g. mobile phones if a shortcut is added to the homescreen.

  From MDN ([linked above](https://developer.mozilla.org/en-US/docs/Web/Manifest)):

  > The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file. The purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access and a richer experience.
  
  ---

  **robots.txt** - This file is to prevent the crawling and indexing of certain parts of your site by web crawlers and spiders run by sites like Yahoo!  and Google. By telling these "robots" where not to go on your site,  you save bandwidth and server resources.

   For more information about the robots.txt standard, see: [robotext.org](http://www.robotstxt.org/robotstxt.html)

  ---

  **There are more files but we don't think it's neccessery to explain them.**

  ---

  #### ./src

  This folder is for anything that is used when the app is compiled. It contains components, assets used in those componments, styles, functions, tests and more. Basically all the functionality and styling with your components coming in here!

  ---

  ##### Files and folders in the src directory:

  ---

  Our base structure contains folders for:
  
  * **assets** - a folder to store all assets used in our components, such as **imgs**.

  
  * **layout** - a folder where we can create layouts for different screens, such as mobile, tablet, desctop


  * **network** - a folder with functions for HTTP requests.

  * **pages** - a folder with different pages in our application, such as **home page**, **about us**, etc.

  * **utils** - a folder with utility functions, such as the **`useDisplay()`** custom hook to determine user's device display.

  Important files in the **src** folder are:

  * **package.json** - this file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

  * **package-lock.json** - is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

  * **README.md** - like this file it describes the project and gives the general public, and developers what the project is all about.

  * **.gitignore** - this file is to describe which folders or files should be ignored by git. 

  * **.eslintrc.json** - (optional) - this file is autogenerated when setting up ESLint, which is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  For more information how to setup ESLint visit **[eslint.org](https://eslint.org/docs/user-guide/getting-started)** or checkout the **[ESLint cheatsheet](./cheatsheets/setting-enviroment/ESLint.md)**

  * **.env.development** - this file is for declearing enviroment variables in **development** mode!

  * **.env.production** - this file is for declearing enviroment variables in **production** mode!

# Dependancies

    {
      "dependencies": {
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "node-sass": "^6.0.1",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "4.0.3",
        "sass-loader": "^12.1.0",
        "web-vitals": "^1.0.1"
      },
      "devDependencies": {
        "eslint": "7.11.0",
        "eslint-config-airbnb": "18.2.1",
        "eslint-plugin-import": "2.22.1",
        "eslint-plugin-jsx-a11y": "6.4.1",
        "eslint-plugin-react": "7.21.5",
        "eslint-plugin-react-hooks": "1.7.0"
      }
    }
  
# Advanced information
  > Here you can place any other information you'd like to share for your projec, or feel free to make any changes to this file to meet your goals!