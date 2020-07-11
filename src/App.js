import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Navigation from "./components/nav.js";
import ViewTable from "./components/view-table.js";
import ViewClients from "./components/view-clients.js";
import ViewUsers from "./components/view-users.js";
import ViewLumber from "./components/view-lumber.js";
import ViewGlazing from "./components/view-glazing.js";
import ViewMounting from "./components/view-mounting.js";
import ViewSpacers from "./components/view-spacers.js";
import ViewExtras from "./components/view-extras.js";
import ViewOrders from "./components/view-orders.js";
import LogIn from "./components/login.js";
import BuildFramePage from './components/03-build-frame-page.js';
import OrderDetailsPage from './components/02-order-details-page.js';
import NewClientPage from './components/01-new-client-page.js';
import ExistingClientPage from './components/01.1-existing-client-page.js';
import EstimatePage from './components/04-estimate-page.js';
import { withAuthenticator } from '@aws-amplify/ui-react';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='*' component={Navigation}/>
          <Route exact path='/' component={LogIn}/>
          <Route exact path='/build' component={BuildFramePage}/>
          <Route exact path='/orderdetails' component={OrderDetailsPage}/>
          <Route exact path='/newclient' component={NewClientPage}/>
          <Route exact path='/existingclient' component={ExistingClientPage}/>
          <Route exact path='/estimate' component={EstimatePage}/>
          <Route exact path='/table' component={ViewTable}/>
          <Route exact path='/clients' component={ViewClients}/>
          <Route exact path='/users' component={ViewUsers}/>
          <Route exact path='/lumber' component={ViewLumber}/>
          <Route exact path='/glazing' component={ViewGlazing}/>
          <Route exact path='/mounting' component={ViewMounting}/>
          <Route exact path='/spacers' component={ViewSpacers}/>
          <Route exact path='/extras' component={ViewExtras}/>
          <Route exact path='/orders' copmonent={ViewOrders}/>

        </div>
      </Router>
    )
  }
}

export default withAuthenticator(App, true);
