export default function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(action, state)
    render()
  }

  function getState() {
    return state
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  }
}


function render() {

}

// let countStore = createStore(candyReducer)
// let candyStore = createStore(countReducer)
