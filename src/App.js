/**
  * @description      : 
  * @author           : christian
  * @group            : 
  * @created          : 09/11/2021 - 19:10:29
  * 
  * MODIFICATION LOG
  * - Version         : 1.0.0
  * - Date            : 09/11/2021
  * - Author          : christian
  * - Modification    : 
**/
import React, { Component } from 'react';
import logo from './logo.png';
import { Header, Content, Footer, Cv } from "./components";
import {
  BrowserRouter as Router, Switch,
  Route, Link, Redirect
} from "react-router-dom";
import "./sass/index.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path='/accueil' render={
                (props) => { return (<Content />); }
              }
            />
             <Route exact path='/cv' render={
                (props) => { return (<Cv />); }
              }
            />
            <Redirect to="/accueil" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}