import React from "react";
import { Link } from "react-router-dom";
import './ContactCard.css';

const ContactCard = (props) => {

  const { id, name, email }= props.item;

  return(
    <div className="card my-1 py-2">
      <div className="p-2 d-flex justify-content-between align-items-center">
      <Link to={ { pathname:`/contact/${id}`, state:{ contact: props.item } } } className="link">
        <div>
          <div> { name } </div>
          <div> { email } </div>
        </div>  
      </Link>        
      <div>
        <Link to={{ pathname:`/editcontact`, state:{ contact:props.item }  }}><i className="fa fa-edit mr-3" ></i></Link>
        <i className="fa fa-trash"     onClick={() => props.getIdHandler(id)} ></i>
      </div>
    </div>
    </div>
  )
}

export default ContactCard;
