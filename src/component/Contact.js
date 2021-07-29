import React from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
  
  const { id, name, email } = props.location.state.contact

  return(
    <div className="container py-3">
      <Link to="/"><i className="fa fa-arrow-left"></i></Link>
      <div className="card my-3">
        <div className="card-body">
          <div> <label className="w-25">ID : </label>  {id} </div>
          <div> <label className="w-25">Name : </label>  {name} </div>
          <div> <label className="w-25">Email : </label>  {email} </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
