import React from 'react';
// import './App.css';
import SizingForm from "./components/sizing-form.js";
import Navigation from "./components/nav.js";
import ViewTable from "./components/view-table.js";
import ViewClients from "./components/view-clients.js";
import ViewUsers from "./components/view-users.js";
import ViewLumber from "./components/view-lumber.js";

function App() {
  return (
    <div className="App">
      <Navigation />      
      {/* <SizingForm /> */}
      {/* <ViewTable /> */}
      {/* <ViewClients /> */}
      {/* <ViewUsers /> */}
      <ViewLumber />
    </div>
  );
}

export default App;
