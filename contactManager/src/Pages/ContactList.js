import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44395/api/Contacts")
      .then((response) => {
        console.log(response);
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.fullName} - {contact.email} - {contact.phone} -{" "}
            {contact.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
