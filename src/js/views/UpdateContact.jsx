import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";


export const UpdateContact = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  const [contact, setContact] = useState({
    "name": "",
    "phone": "",
    "email": "",
    "address": ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    let data = store.contacts.find((c) => c.id == params.contactId)
    setContact(data)
  }, []);

  const handleUpdateContact = async () => {
    try {
      await actions.updateContact(params.contactId, contact);
      // Optionally, you can navigate to a different page or display a success message
      // after the update is successful
      navigate('/');
    } catch (error) {
      console.error("Error updating contact:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };




  return (
    <>
      <div class="px-5">
        <div>
          <h1>Update Contact</h1>
        </div>

        <div class="d-flex align-items-left mb-2">
          <p>FULL NAME</p>
        </div>

        <div class="d-flex align-items-left mb-2">
          <input value={contact.name}
            onChange={(e) => setContact((prevContact) => ({
              ...prevContact,
              name: e.target.value,
            }))}
            placeholder="Full Name" class="w-100"></input>
        </div>

        <div class="d-flex align-items-left mb-2">
          <p>EMAIL</p>
        </div>

        <div class="d-flex align-items-left mb-2">
          <input
            value={contact.email}
            onChange={(e) => setContact((prevContact) => ({
              ...prevContact,
              email: e.target.value,
            }))}
            placeholder="Email" class="w-100"></input>
        </div>

        <div class="d-flex align-items-left mb-2">
          <p>PHONE</p>
        </div>

        <div class="d-flex align-items-left mb-2">
          <input
            value={contact.phone}
            onChange={(e) => setContact((prevContact) => ({
              ...prevContact,
              phone: e.target.value,
            }))}
            placeholder="Phone " class="w-100"></input>
        </div>

        <div class="d-flex align-items-left mb-2">
          <p>ADDRESS</p>
        </div>

        <div class="d-flex align-items-left mb-2">
          <input
            value={contact.address}
            onChange={(e) => setContact((prevContact) => ({
              ...prevContact,
              address: e.target.value,
            }))}
            placeholder="Address" class="w-100"></input>
        </div>


        <div className="justify-content-center">
          <button
            onClick={() => {
              handleUpdateContact();
              navigate('/');
            }}
            className="btn btn-primary w-100"
          >
            SAVE
          </button>
        </div>

        <div className="d-flex align-items-left">
          <a href="/">or Back to Contacts</a>
        </div>



      </div>
    </>

  );
};
