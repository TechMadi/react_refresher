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

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### JSX Rules

Return  single element ( one parent element)

- semantics section/article
- Fragment -let's us group elements without adding  extra  nodes
- camelCase property naming convention
- className instead of class
- close  every element
- Formating
  - opening tag in the same  line as return  or ()
- Nested Components

### React Developer Tools

- top right corner
- more tools/extensions
- open chrome web store

### Local Images(Public Folder)

- External images ( hosted on a different server) - just need an url
- local images(public folder) -less perfomant
- local images(src folder)-better solution for assets since under the hood they get optimzed
- ```js
  const image =() =>{ <img/>
  }
  ```

### JSX -CSS

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

### Props

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

### Children Prop

- Everything we render  between component  tags
- during  this course we shall use maily Context Api
- special prop , has to be 'children'
- can place anywhere in JSX
