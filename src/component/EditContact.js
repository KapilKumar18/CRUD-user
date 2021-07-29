import React from "react";
import { Link } from "react-router-dom";

class EditContact extends React.Component{
  
  constructor(props){
    const {id, name, email} = props.location.state.contact;
    super(props);
    this.state = {
      id,
      name,
      email
    }  
  }

  update = (e) => {
    e.preventDefault();
    if ( this.state.name === "" || this.state.email === "" ){
      alert("All Fields are mandatory")
    }

    else{
      this.props.history.push("/");
      this.props.editContactHandler(this.state);
      this.setState({name:"", email:""});
    }
  }
  
  render(){
    return(
      <div className="container py-3">
        <div className="d-flex justify-content-between">
          <h3> Edit Contact </h3>
          <Link to="/"><button className="btn btn-secondary"> Contact List </button></Link>
        </div>        
        <form onSubmit={this.update}>
          <div className="py-2">
            <label> Name : </label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) } className="w-100 p-1" />
          </div>
          <div className="py-2">
            <label> Email : </label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) } className="w-100 p-1" />
          </div>
          <button className="btn btn-secondary my-2"> Update </button>
        </form>
      </div>
    )
  }
}

export default EditContact;