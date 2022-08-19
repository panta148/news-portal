import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Component/Home';
import Navbar from './Component/Navbar';

export class App extends Component {
  page = 6;

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home key='general' country='in' category='general' pageSize={this.page} />

          </Route>
          <Route exact path='/sports'>
            <Home key='sports' country='in' category='sports' pageSize={this.page} />

          </Route>
          <Route exact path='/business'>
            <Home key='business' country='in' category='business' pageSize={this.page} />

          </Route>
          <Route exact path='/entertainment'>
            <Home key='enttertainment' country='in' category='entertainment' pageSize={this.page} />
          </Route>
          <Route exact path='/health'>
            <Home key='health' country='in' category='health' pageSize={this.page} />

          </Route>
          <Route exact path='/science'>
            <Home key='science' country='in' category='science' pageSize={this.page} />

          </Route>
          <Route exact path='/technology'>
            <Home key='technology' country='in' category='technology' pageSize={this.page} />

          </Route>

        </Switch>

      </>
    )
  }
}

export default App

