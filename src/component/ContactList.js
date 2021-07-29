import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList = (props) => {

  const getId = (id) => {
    props.deleteContactHandler(id);
  }

  const renderContactList =  props.contacts.map((item) => {
    return <ContactCard key={item.id} item={item} getIdHandler={getId} />
  })    

return(
  <div className="container py-4">
    <div className="d-flex justify-content-between">
      <h3> ContactList </h3>
      <Link to="/addcontact"><button className="btn btn-secondary"> Add Contact </button></Link>
    </div>

    <div className="search">
      <input type="text" placeholder="Search here....." className="w-100 my-4 p-2"/>
      <i className="fa fa-search" ></i>
    </div>
      {
        props.contacts.length >0 ?
        <div> { renderContactList } </div>:
        <h4 className="text-center py-3"> No data Found</h4>

      }    
  </div>
)}

export default ContactList;