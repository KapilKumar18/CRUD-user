import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component{
  
  state = {
    name:"",
    email:""
  }

  add = (e) => {
    e.preventDefault();
    if ( this.state.name === "" || this.state.email === "" ){
      alert("All Fields are mandatory")
    }

    else{
      this.props.history.push("/");
      this.props.addContactHandler(this.state);
      this.setState({name:"", email:""});
    }
  }
  
  render(){
    return(
      <div className="container py-4">
        <div className="d-flex justify-content-between">
          <h3> Add Contact </h3>
          <Link to="/"><button className="btn btn-secondary"> Contact List </button></Link>
        </div>
          <form onSubmit={this.add}>
            <div className="py-2">
              <label> Name : </label>
              <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) } className="w-100 p-1" />
            </div>
            <div className="py-2">
              <label> Email : </label>
              <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) } className="w-100 p-1" />
            </div>
            <button className="btn btn-secondary my-2"> Add </button>
          </form>
      </div>
    )
  }
}

export default AddContact;
