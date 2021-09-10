import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './App.css';

// Pages
import { Home } from './pages/Home';
import { Reports } from './pages/Reports';
import { Products } from './pages/Products';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reports' component={Reports} />
          <Route exact path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  )
}
