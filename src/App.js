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
import NewClientForm from "./components/new-client.js";

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
      <NewClientForm />
    </div>
  );
}

export default App;
