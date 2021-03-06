import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import Test from './pages/Test';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AnimationApp() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route exact path="/" children={<Home />} />
          <Route path="/test/:test" children={<Test />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);