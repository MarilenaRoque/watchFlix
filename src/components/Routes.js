import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
import MovieList from '../containers/MovieList';
import MoviePage from '../containers/MoviePage';
import Navbar from './Navbar';
import Footer from './Footer';

const Routes = () => (
  <div style={{ position: 'relative' }}>
    <Router>
      <Navbar />
      <div data-testid="page-content">
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movie/:id">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default Routes;
