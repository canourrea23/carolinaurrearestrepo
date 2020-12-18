import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import { Component } from 'react';
import setAuthToken from './utils/setAuthToken';

import './App.css';

import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';





const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getStorage.getItem('jwtToken')
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest } {...props} /> : <Redirect to="/login"/>

  }}/>
}
function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);    

  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')){
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setIsAuthenticated(localStorage.jwtToken);
      setCurrentUser(token);
    }
  })
  
  const nowCurrentUser = (userData) => {
    console.log('newCurrentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null)
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />      
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={ nowCurrentUser } setIsAuthenticated={ setIsAuthenticated } user={ currentUser }/>} />
          <Route path='/about' component={ About } />
          <PrivateRoute path='/profile' component={ Profile } user={ currentUser } />
          <Route exact path="/" component={ Welcome }/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;