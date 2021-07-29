import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import Contact from './component/Contact';
import EditContact from './component/EditContact';

const App = () => {

  const [ contacts, setContacts ] = useState([]);

  const addContact = (contact) => {
    setContacts([{ id: uuid() , ...contact }, ...contacts])
  }

  const deleteContact = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContact);
  }

  const editContact = (editedContact) => {
    const { id } = editedContact;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...editedContact } : contact
    })
  )}

  useEffect(()=>{
    const getContact = JSON.parse(localStorage.getItem("contacts"))
    getContact && setContacts(getContact)
  },[])

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])

  return(
    <div>
        <Header />
        <Router>
        <Switch>
          <Route exact path="/" render={(props) =>
            <ContactList {...props} contacts={contacts} deleteContactHandler={deleteContact} /> 
          }></Route>

          <Route exact path="/addcontact" render={ (props) =>  
            <AddContact {...props} addContactHandler={addContact} />  
          }></Route>         
          
          <Route path="/contact/:id" component={Contact}/>

          <Route exact path="/editcontact" render={(props) =>
            <EditContact {...props} editContactHandler={editContact} /> 
          }></Route>

        </Switch>  
     </Router>
    </div>
  )
}


export default App;
