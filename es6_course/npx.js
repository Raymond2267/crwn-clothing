/**
 * Create React App by Facebook
 *  - Will scaffold out a React project meaning set up all the files and folders and
 *    link them properly to get started on the project
 *
 *  npx create-react-app my-app (give a name)
 *  cd my-app
 *  npm start (npm installs node related libraries globally)
 *  -npx directly installs all required files and executes immediately
 *    - Advantage: don't need to take extra space/clog up your disk
 *      - Can use for certain things when you want the latest version
 *  npm run build
 *  npm run start
 *  npm run test
 *  npm run eject (Never eject out of a create-react-app because create-react-app will always
 *  have the new changes implemented and gives the best system and project build out there)
 *
 * Hooks
 * - A way to create a React component
 * - Can't really apply to anywhere else in programming because it is specific to React
 *
 * Classes (https://reactjs.org/docs/react-component.html)
 * - To first write a class, import React, { Component } from 'react';
 * - Using a class component lets you access the state
 * - Can write functions and classes for html
 *  - Would choose classes because React gives you more functionality
 */

// super calls the constructor method on the component Class//gives us access to this.state
// render will return any html that we want (in this case, our <p>Hello Ray</p>)
// can replace with a class
class App extends Component { //This allows us to pass properties to a user defined class when constructors are not present
  constructor() {  //class App extends Component also allows us to define functions such as setState which can be inherited
    super();
    this.state = {
      string: 'Hello Raymond Jang',
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.state.string}</p> /** variable referring to this.state */
          <button onClick={() => this.setState({ string: 'Hello Ray' })}>
            {' '}
            /** this.setState is a JS variable Change Text */
          </button>
        </header>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
  }
}
  this.state = {
    monsters: [
      {
        name: 'Frankenstein',
        id: 'mon1'
      },
     {
        name: 'Dracula',
        id: 'mon2'
      },
     {
        name: 'Zombie',
        id: 'mon3'
      },
    ],
  };

render() { //only required method in a class component & triggered by change of state in a component
  return ( //needed to return what DOM looks like or any changes to the state in the component(s)
    <div className='App'>
      {
        {this.state.monsters.map(monster => (
        <h1 key={monster.id}> {monster.name}</h1>
        ))}
    </div>
  )
}