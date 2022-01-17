// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';

/* function countReducer(count, step) {
  return count + step;
} */

/* function countReducer(state, action) {
  return {...state, ...action};
} */

/* const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action)
}); */

function countReducer(state, action) {
  const {type, step} = action
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}


function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useReducer(countReducer, initialCount);

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)
  /* const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step}) */
  /* const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  }) */
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state;
  /* const increment = () =>
    setState(currentState => ({count: currentState.count + step})) */
    const increment = () => dispatch({type: 'increment', step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
