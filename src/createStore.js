export default function createStore(reducer) {
  // add your code here
  let state;

  function getState(){
    return reducer(state, "@@INIT")
  }

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
