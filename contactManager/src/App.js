// App.js
import React from "react";
import ContactList from "./Pages/ContactList";
import AddContactForm from "./Pages/AddContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContactForm />} />
          {/* Add/Edit/Delete routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
