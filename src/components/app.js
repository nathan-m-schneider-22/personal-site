import React from 'react';

import '../styles/app.scss';
import {
  HashRouter, Route, NavLink, Switch,
} from 'react-router-dom';
import Bio from './bio';
import Projects from './projects';
import Questions from './questions';
import Facts from './facts';
import ENGS21 from './engs21';

const Nav = () => {
  return (
    <div className="navbar">
      <li><NavLink exact to="/">About</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/questions">Q/A</NavLink></li>

    </div>
  );
};

const Privacy = () => {
  return (
    <div className="privacy">
      <p>
        When you visit this site, I get notified with your IP. Thanks for checking it out!
        For more information see <a href="https://github.com/nathan-m-schneider-22/personal-site#privacy-policy">privacy policy</a>
      </p>
    </div>
  );
};
const FallBack = () => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <HashRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Bio} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/engs21" component={ENGS21} />

          <Route component={FallBack} />
        </Switch>
        <Privacy />
      </div>
    </HashRouter>
  );
};

export default App;
