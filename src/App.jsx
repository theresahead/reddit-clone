import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/sass/index.scss';

import Header from './components/Header';
import Comments from './components/Comments';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Header title="Reddit Client" />
              <Switch>
                <Route path="/comments/:id">
                  <Comments />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
