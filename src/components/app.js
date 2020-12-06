import React from 'react';

import '../styles/app.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Bio from './bio';
import Projects from './projects';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><a href="/src/media/Nathan_Schneider_Resume.pdf" target="_blank">Resume </a> </li>

      </ul>
    </nav>
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
      </div>
    </Router>
  );
};

export default App;
