import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <div className='App'>
      <div className='appwrapper'>
        <Header />
        <Navbar />
        <div className='appwrappercontent'>
          <div className='Polaroid'></div>
          <Route exact path='/dialogs'
            render={ () => <DialogsContainer /> }/>

          <Route path='/profile/:userId?'
            render={ () => <ProfileContainer /> }/>

          <Route path='/users'
            render={ () => <UsersContainer /> }/>

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


