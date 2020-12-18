import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import { Component } from 'react';
import setAuthToken from './utils/setAuthToken';

import './App.css';

import Welcome from './components/Welcome';
import Navbar from './components/Navbar';


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
      {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />       */}
      <Welcome />
    </div>
  );
}
export default App;