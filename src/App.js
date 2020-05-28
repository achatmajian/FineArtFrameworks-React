import React from 'react';
// import './App.css';
import SizingForm from "./components/sizing-form.js";
import Navigation from "./components/nav.js";
import ViewTable from "./components/view-table.js";

function App() {
  return (
    <div className="App">
      <Navigation />      
      {/* <SizingForm /> */}
      <ViewTable />
    </div>
  );
}

export default App;
