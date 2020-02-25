import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';

const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));
const PersonDetails = lazy(() => import('./components/Person'));


function App() {
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/person-details" component={PersonDetails}/>
              </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
