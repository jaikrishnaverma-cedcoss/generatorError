import { useState } from 'react';
import './App.css';
import ErrorBoundary from './comp/ErrorBoundary';
import Main from './comp/Main';

function App() {
 const [num,setNum]=useState(parseInt(Math.random() * (20 - 1) + 1))
 console.log(num)
  return (
    <div className="App">
      <header className="App-header">
      <ErrorBoundary setNum={setNum}>
      <Main setNum={setNum} num={num}/>
      </ErrorBoundary>
  
      </header>
    </div>
  );
}

export default App;
