/** Complete React Developer
 *Concepts
  1. Don't touch the DOM, I'll do it.
    Imperative: 
      - DOM = Document, Object, Model (browser uses to display a website)
      - JS is used to manipulate the DOM
      - Directly change each individual part in response to different user actions/events
      -Cons: Difficult to differentiate between the relationships between all the actions/events and their edgecases (results)

    Declarative: (React is Declarative)
      - DOM is a long process, so we don't need to touch the DOM
      - Uses React
      - Given a blueprint (the changes we want to implement), React can change those elements without touching the DOM
      -Pros: Less complexity, faster and cleaner code

  2. Build websites like lego blocks
    State:
      - The data of the component
    Components:
      - Individual elements and pieces form to create the app/bigger component
      * material-ui.com/components
      * blueprint.js
      * react-bootstrap.github.io
      - Can share components to be used on different websites/projects
      * Download React Developer Tools from Chrome Web Store

  3. Unidirectional data flow
    State:
      - State can exist in different components
      - Data will never moveupwards -> changes in the state/components will always "trickle down"
        - Because data only moves down from the state to the DOM, we can find the state and its components
          its located in to locate where the bug is
    **State**
       * let state = {
       *     user: 'Raymond Jang',
       *     isLoggedIn: True,
       *     friends: ['Eugene', 'Anh', 'Nick']
       *     }
       * 
       * **React component (JSX)**
       * const element = (
       *  <div>
       *    <h1>Hello!</h1>
       *     <h2>Good to see you here.</h2>
       *  </div>
       * );
       * 
       * **Combines to give our React library the components and the state; Makes a VirtualDOM (the blueprint)**
       * For example, function React(state, components){
       * }
  4. Just the user interface, everything else is you
        - Learn once, write anywhere
        - Uses a "blueprint" of React to change the elements no matter what software you are using without touching DOM
        - Implements two libraries, core React library (blueprint) and React DOM library (only knows to change DOM properties)
  
  Tips to succeed as a React developer
        1. Decide on Components
          - What is the component, how do we want to build/rebuild these components, do we break it down
        2. Decide the State and where it lives
          - Important in architecting your app
        3. What changes when state changes
          - What part of the VirtualDOM changes
          - Has a huge effect on the performance of the app

  JSX
    - className is a JSX attribute (specifies a CSS class); you can't use class because it is reserved in JS
    - {} inside of html which JSX allows us to implement JS into our html
    - Clarification
        - Can not modify state in React without setState. Ex: onClick={() => this.setState({string: 'Whatever'})
        - When state is modified after the use of setState, we rerender (triggered by a 
          change of state in a component)
    
  Extra
   - when you use the key attribute, it should be uesd when you are using a map() function
     inside of the render, or if there is a list of the same JSX elements aka an object with
     multiple keys and values


  Component
    - componentDidMount (when React puts our component onto a page; renders our component into the DOM)
    -fetch
      - fetch returns us a promise (make an API request)
      - fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({monsters: users });
 */
