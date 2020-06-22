import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Navigation />      
      {/* <ViewTable /> */}
      {/* <ViewClients />
      <ViewUsers />
      <ViewLumber />
      <ViewGlazing />
      <ViewMounting />
      <ViewSpacers />
      <ViewExtras />
      <ViewOrders /> */}

      {/* Log In "page" */}
      {/* <LogIn /> */}
      
      {/* First "page" in the "Create Order" flow, where users enter client info */}
      {/* <NewClientPage /> */}
      {/* <ExistingClientPage /> */}

      {/* Second "page" in the "Create Order" flow, where users enter order info. */}
      {/* <OrderDetailsPage /> */}

      {/* Third "page" in the "Create Order" flow, where users build a frame. */}
      <BuildFramePage />

    </div>
  );
}

export default App;
