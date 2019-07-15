This project is developed for "Exzeo" as part of "Code Test". It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirement

You have a GroceryApp class, which receives a list of products, each one with name and votes. The app should render an unordered list, with a list item for each product. Products can be upvoted or downvoted.

By appropriately using React state and props, implement the upvote/downvote logic.

Consider that there is a node service which serves you endpoint for list of products (GET /products) and update votes (POST /upvote, POST /downvote).

### Note: Code should be neat and clean

- There should be proper setup so that anybody can run the application by single line command

- There should some sample for test cases

- Use Redux in your code

## Technology stack used

- react: `16.8.6`

- react-redux: `7.1.0`

- redux: `4.0.4`

- redux-thunk: `2.3.0`

- enzyme: `3.10.0`

## How to run this project

- Step 1: Download the zipped code from [here](https://github.com/asananddevsingh/grocery-app-exzeo/archive/master.zip).

- Step 2: Un-Zip the code to any directory. Open the "grocery-app-exzeo" folder as a react project in any of front-end editor such as visual studio code.

- Step 3: Open the project ternimal, move to the root folder i.e. "grocery-app-exzeo" and run the command `npm install`. It will install all the project dependencies. (Node and npm must have to be installed to use this app)

- Step 4: After installing all the dependencies. `npm start` runs the app in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## APIs used

I'm using Google's free web application development [platform](https://firebase.google.com/).

- `GET`: `https://react-my-burger-0414.firebaseio.com/groceryItems.json`

- `PUT`: `https://react-my-burger-0414.firebaseio.com/groceryItems/item{itemId}.json`

### `npm test`

Jest testing framework along with enyme is used to unit test the app.

I've written very basic test cases for only two of the files "grocery.jsx" and "header.jsx".
