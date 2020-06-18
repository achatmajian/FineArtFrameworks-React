import React from 'react';
// import './App.css';
import SizingForm from "./components/sizing-form.js";
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
import NewClientForm from "./components/new-client-form.js";
import CreateOrderHeader01 from './components/create-order-header-01.js';
import OrderDetailsForm from './components/order-details-form.js';
import CreateOrderHeader02 from './components/create-order-header-02.js';
import SizingForm2 from './components/sizing-form-2.js';
import ManufacturingForm from './components/manufacturing-form.js';
import FittingForm from './components/fitting-form.js';
import NotesForm from './components/notes-form.js';
import BuildFramePage from './components/03-build-frame-page.js';
import OrderDetailsPage from './components/02-order-details-page.js';
import NewClientPage from './components/01-client-info-page.js';

function App() {
  return (
    <div className="App">
      <Navigation />      
      {/* <SizingForm /> */}
      {/* <ViewTable /> */}
      {/* <ViewClients /> */}
      {/* <ViewUsers /> */}
      {/* <ViewLumber /> */}
      {/* <ViewGlazing /> */}
      {/* <ViewMounting /> */}
      {/* <ViewSpacers /> */}
      {/* <ViewExtras /> */}
      {/* <ViewOrders /> */}
      {/* <LogIn /> */}
      
      {/* First "page" in the "Create Order" flow, where users enter client info */}
      <NewClientPage />


      {/* Second "page" in the "Create Order" flow, where users enter order info. */}
      {/* <OrderDetailsPage /> */}

      {/* Third "page" in the "Create Order" flow, where users build a frame. */}
      {/* <BuildFramePage /> */}

    </div>
  );
}

export default App;
