import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are necessary to fill :)");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  }

  render() {
    return (
      <div className="ui main" style={{ marginTop: "70px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name: </label>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>

          <div className="field">
            <label>Phone Number or Email: </label>
            <input 
              type="text" 
              name="email" 
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })} />
          </div>

          <button className="ui button pink">ADD</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
