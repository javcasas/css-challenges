import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HyperspaceIn, HyperspaceOut} from './hw-hyperspace';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HyperspaceIn>
          adfsdfasdfasdgdfag
        </HyperspaceIn>
        <div style={{height: "30px", width: "100%"}} />
        <br />
        <HyperspaceOut>
          adfsdfasdfasdgdfag
        </HyperspaceOut>
      </header>
    </div>
  );
}

export default App;
