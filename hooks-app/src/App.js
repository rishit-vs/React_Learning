import React from 'react'
import './App.css';
import DataFetching from './component/useEffectFetching/DataFetching';
// import HookCounterOne from './component/useEffect/HookCounterOne';
// import HookMouse from './component/useEffect/HookMouse';
// import MouseContainer from './component/useEffect/MouseContainer';
// import InternalHookCounter from './component/useEffect/InternalHookCounter';
// import HookCounter from './component/HookCounter';
// import HookCounterTwo from './component/HookCounterTwo';
// import HookCounterThree from './component/HookCounterThree';
// import HookCounterFour from './component/HookCounterFour';

function App() {
  return (
    <div className="App">
      {/* <h1>Fetching using useEffect</h1> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      <DataFetching />
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <InternalHookCounter /> */}

    </div>
  );
}

export default App;
