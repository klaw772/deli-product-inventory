This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Welcome to the Deli Product Inventory!

This app was created to contribute to the supermarket/deli industry, where employees handling orders for the store can view what is currently available, as well as add any new products that are coming in. Additionally, customers can view the list of products prior to entering the store for a faster and more seamless experience.

## To Run The App

1. Clone this repository and navigate to its directory in the terminal.
2. Make sure that the most up-to-date version of Node.js is downloaded and installed locally prior to completing subsequent steps - https://nodejs.org/en/download/
   1. To check if this has been successfully installed, run the following command in your terminal - `node --version`
3. Following Node.js installation, run `npm i` to install all necessary dependencies for this application.
4. In one tab in the terminal, run `node server.js` to start the Node.js server needed to communicate with the front-end.
   1. If this server is successfully spun up, the console in the terminal should say `Listening on Port ****`
5. While the Node.js server is running, open another tab in the same repository directory and run `npm start` to start the front-end application.
   1. This will kick off code compilation - when completed, the console in this tab should read `Compiled successfully!`
6. In your browser, navigate to `http://localhost:3000` to view the deli product inventory!
7. When you're done working with the app, exit both servers by using Ctrl+C (or command+C).

## How to Use The App

This app includes a few features:

- a comprehensive list of all the deli products available in the store
- a more detailed view of any individual deli product selected from the list
- a form where additional products can be entered (as long as all fields are completed)

## To Run The Testing Suite

1. Navigate to the repository directory in the terminal.
2. Run `npm test` to open the testing environment. Once opened, enter `a` to run the entire test suite.
