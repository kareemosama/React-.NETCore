// AddContactForm.js
import React, { useState } from "react";
import axios from "axios";

function AddContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:44395/api/Contacts", formData)
      .then((response) => {
        console.log("Contact added successfully:", response.data);
        // Optionally redirect or perform other actions after adding
      })
      .catch((error) => {
        console.error("Error adding contact:", error);
      });
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContactForm;
