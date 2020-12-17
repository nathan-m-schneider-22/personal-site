import React from 'react';

import '../styles/app.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Bio from './bio';
import Projects from './projects';

const Nav = () => {
  return (
    <div className="navbar">
      <li><NavLink exact to="/">About</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="privacy">
      <p>
        By visiting this site you agree to have your attendence logged and reported to me.
        For more information see <a href="https://github.com/nathan-m-schneider-22/personal-site">the repository</a>
      </p>
    </div>
  );
};
const FallBack = () => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Bio} />
          <Route exact path="/projects" component={Projects} />
          <Route component={FallBack} />
        </Switch>
        <Privacy />
      </div>
    </Router>
  );
};

export default App;
