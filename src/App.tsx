import React from 'react';
import User from './component/user'

function sum(a:number,b:number) {
  return a + b;
}

function App() {
  return (
    <div className="App">
      <h1>typescript</h1>

      <User name="Ali" age={21} hasChild={true} sum={sum} father='MR' mother='X' />
      <hr/>
      <User name="X" age={21} hasChild={false} sum={sum} mother='z' />
    </div>
  );
}

export default App;
