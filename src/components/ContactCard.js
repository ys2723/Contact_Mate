import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content" style={{ marginLeft: "10px" }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <i 
                className="trash alternate outline icon" 
                style={{ color: "red", marginTop: "1px", cursor: "pointer", marginLeft: "auto" }}
                onClick={() => props.clickHandler(id)}>
            </i>
        </div>
    );
}

export default ContactCard;
