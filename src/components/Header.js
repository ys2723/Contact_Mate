import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center" style={{ marginTop: "10px" }}>
      <h2 style={{ marginTop: "10px", fontWeight: "800"}}>Contact Mate</h2>
        <div style={{ marginLeft: "auto", marginTop: "10px" }}>
          <Link to="/" className="ui button pink">Contact List</Link>
          <Link to="/add" className="ui button pink">Add Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
