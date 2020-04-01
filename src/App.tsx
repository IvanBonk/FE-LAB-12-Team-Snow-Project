import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './shared/constants/routes.constants';
import { LandinPage } from './pages/landing-page/landing-page.component';
import { Auth } from './pages/Auth';
import { Registration } from './pages/Registration';
import { Search } from './pages/Search';
import { Result } from './pages/Result';
import { User } from './pages/User';
import { Pet } from './pages/Pet';
import { AddPet } from './pages/AddPet';
import { Comparison } from './pages/comparison/comparison.component';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home} component={LandinPage}></Route>
        <Route path={ROUTES.auth} component={Auth}></Route>
        <Route path={ROUTES.registration} component={Registration}></Route>
        <Route path={ROUTES.search} component={Search}></Route>
        <Route path={ROUTES.result} component={Result}></Route>
        <Route path={ROUTES.user} component={User}></Route>
        <Route path={ROUTES.pet} component={Pet}></Route>
        <Route path={ROUTES.addpet} component={AddPet}></Route>
        <Route path={ROUTES.comparison} component={Comparison}></Route>
      </Switch>
    </Router>
  );
};

export default App;
