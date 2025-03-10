import React from 'react';
import User from './component/user'

function sum(a:number,b:number) {
  return a + b;
}

function App() {
  return (
    <div className="App">
      <h1>typescript</h1>

      <User name="ali" age={21} hasChild={true} sum={sum} />
    </div>
  );
}

export default App;
