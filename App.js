import React from 'react';
import './App.css';
import Component from './component'
import Cart from './Cart'
import {  Route,Switch} from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';
import Login from './Login'

function App() {
 
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/' exact>
      <img src="https://www.foodshop.pk/images/pizza3.jpg"></img>
        <br></br>
        <br></br>
        <Component />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <br></br>
      <br></br>
      </Route>
      <Route path='/login' component={Login}></Route>
      </Switch>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
    </div>
  );
}

export default App;
