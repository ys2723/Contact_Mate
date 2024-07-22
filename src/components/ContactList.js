import React, { useState } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const deleteContactHandler = (id) => {
    props.getContactID(id);
  };

  const renderContactList = props.contacts
    .filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((contact) => {
      return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;
    });

  return (
    <div className="main" style={{ marginTop: "70px" }}>
      <div className="ui search" style={{ marginBottom: "20px" }}>
        <div className="ui icon input">
          <input 
            type="text" 
            placeholder="Search Contacts ..." 
            className="prompt" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <h2>Contact List</h2>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
    </div>
  );
};

export default ContactList;
