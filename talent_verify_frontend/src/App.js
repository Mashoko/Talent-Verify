import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import EmployeePage from './pages/EmployeePage';
import Navigation from './components/common/Navigation';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation /> {Navigation}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/companies" component={CompanyPage} />
          <Route exact path="/employees" component={EmployeePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
