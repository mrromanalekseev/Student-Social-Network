import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className='App'>
      <div className='appwrapper'>
        <Header />
        <Navbar />
        <div className='appwrappercontent'>
          <div className='Polaroid'></div>
          <Route exact path='/dialogs'
            render={() => <DialogsContainer store={props.store} /> } />
          <Route path='/profile'
            render={ () => <Profile store={props.store} /> } />
        </div>
      </div>
    </div>

  );
}

export default App;

/* function App() {
  return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Texasviking! Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
  );
} */


