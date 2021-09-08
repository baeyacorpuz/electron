import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import MainRoute from './routes/MainRoutes';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Fragment>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <MainRoute />      
          </BrowserRouter>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
