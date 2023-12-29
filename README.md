# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

### `npm run build`


## Folder Structure

- node_modules
  - Contains all  dependencies required  by the app. Main dependecies are listed  in the `package.json`
- public : Contains static assests including  `index.html`
  - `index.html`
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src - brain of our app.All our work will be here
- .gitignore - specifies   which files source control(Git) should Ignore
- package.json - a snapshot  of the entire dependency tree
- README- markdown file where you can  share more infor about the project for example  build instructuons and summary

To learn React, check out the [React documentation](https://reactjs.org/).

## JSX Rules

Return  single element ( one parent element)

- semantics section/article
- Fragment -let's us group elements without adding  extra  nodes
- camelCase property naming convention
- className instead of class
- close  every element
- Formating
  - opening tag in the same  line as return  or ()
- Nested Components

## React Developer Tools

- top right corner
- more tools/extensions
- open chrome web store

## Local Images(Public Folder)

- External images ( hosted on a different server) - just need an url
- local images(public folder) -less perfomant
- local images(src folder)-better solution for assets since under the hood they get optimzed
- ```js
  const image =() =>{ <img/>
  }
  ```

## JSX -CSS

- style prop
- {} in JSX means  going back to JS Land
- value is an object  with key/value pairs-capitalized and with ''
- ```js
  const Author =()=>(
  <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.5rem'}}>
  Jordan Moore
  </h4>
  )
  ```
- css rules  still apply (inline vs external css)

## Props

- enables you to  clean up your code
- prop object , convenction to call props, 'shakeAndBake' is  an excellent alternative
- pass as key/value pairs
- if the prop exists it will return  value, otherwise no value
- There is no right or wrong while accessing props
- Alternative you can use  the destructuring  in Vanilla JS
- Saves Time /Typing
- Pull out the properties
- Don't need to reference object anymore
- no need for all the props.propName
- destructure inside component or   in function parameters
-

## Children Prop

- Everything we render  between component  tags
- during  this course we shall use maily Context Api
- special prop , has to be 'children'
- can place anywhere in JSX


## Handling Lists

- Rfactor your  book list details into a list or an array
- Use the ES6/7  map operator to iterate against them
- Mao create a new array from calling a function  for every  array element
- You can't render a react  object using template literals
- A key prop is need  for react to  keep track of the items being iterated
- An Id is prefered instead of using an index , as  the data might be changing
- When destructuring  such an object

  ```js
  <Book key={book.id}  book={book} />
  <Book {... book} />
  ```


## Event Handling

- Similar to Vanilla JS
- Strict naming and use of camelCase
- element,event adn function
- Most Common
  - onClick(click events)
  - onSubmit(submit form)
  - onChange(input Change)
- You can  also use an arrow function to create an anonymous function

## Prop Drilling

- react data flow - can only pass props down
- alternatives Contect API , reduc , other state libraries
