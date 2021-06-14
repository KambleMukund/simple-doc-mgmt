# Getting Started with simple doc upload App

This is simple document upload application developed using react js framework with few opensource technologies like react-query, redux, react-toastify, axios and community version of the ag-grid-react.
Application uses simple HTML and inline css3 without any additional css specific libraries or UI component libraries.

This application bootstrapped with Create React App.
We are using .env for environment configuration.
Uses react recommended and custom eslint rules for linting.
Uses preetier for formating.
Uses husky git hooks with lint-staged for code formating and linting. 
Backend - json-server based mock server with custom file upload and storage implementation 
API calls it uses react-query with react-query-devtools for Fetch, cache and update data in applications all without touching any "global state".
Document viewer is build using https://view.officeapps.live.com/ to display the .doc, xlsx files display with static sample urls from doc list.
We are using css-in-js pattern to apply the css to the components.
Cypress integration and end to end testing is integrated with the application

## Demo
![](demo/simple-doc-upload.gif)

## Known Issue :
Currently the doc list is static and even after upload of new docs we are not adding into current doc list 
We do upload the multiple docs on backend and holding in the folder.
Needs to add cypress automated tests.

## Available Scripts

In the project directory, you can run:

### `npm run start:server`

Runs the application backend mock server in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.
The server will reload if you make edits in code but not in db.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`
To identify the Linting issues in the application run this command 

### `npm run lint:fix`
To fix the Linting issues in the application run this command 

### `npm run cypress:open`
Open the Cypress and Runs the test cases in the browser.

### `npm run cypress:run`
Runs the Cypress test cases in the background and also capture the video