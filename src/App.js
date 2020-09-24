import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/Login/Login";
import { connect } from 'react-redux';
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Spinner from './components/common/spinner/Spinner';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
    return <Spinner />
    }

    return (
        <div className='App'>
          <div className='appwrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='appwrappercontent'>
              <div className='Polaroid'></div>
              <Route exact path='/dialogs'
                     render={() => <DialogsContainer/>}/>

              <Route path='/profile/:userId?'
                     render={() => <ProfileContainer/>}/>

              <Route path='/users'
                     render={() => <UsersContainer/>}/>

              <Route path='/login'
                     render={() => <LoginPage/>}/>

            </div>
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

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


