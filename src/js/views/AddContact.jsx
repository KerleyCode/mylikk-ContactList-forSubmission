import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams hook
import { Context } from '../store/appContext';

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams(); // Use the useParams hook
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    let data = store.contacts.find((c) => c.id === params.contactId);
    if (data) {
      setContact(data);
    }
  }, [store.contacts, params.contactId]);

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSaveContact = async () => {
    try {
      await actions.handleAddContact(contact);
      navigate('/');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <>
      <div className="px-5">
        <div>
          <h1>Add A New Contact</h1>
        </div>

        <div className="d-flex align-items-left mb-2">
          <p>FULL NAME</p>
        </div>

        <div className="d-flex align-items-left mb-2">
          <input
            name="name"
            value={contact.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-100"
          />
        </div>

        <div className="d-flex align-items-left mb-2">
          <p>EMAIL</p>
        </div>

        <div className="d-flex align-items-left mb-2">
          <input
            name="email"
            value={contact.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-100"
          />
        </div>

        <div className="d-flex align-items-left mb-2">
          <p>PHONE</p>
        </div>

        <div className="d-flex align-items-left mb-2">
          <input
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-100"
          />
        </div>

        <div className="d-flex align-items-left mb-2">
          <p>ADDRESS</p>
        </div>

        <div className="d-flex align-items-left mb-2">
          <input
            name="address"
            value={contact.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-100"
          />
        </div>

        <div className="justify-content-center">
          <button
            onClick={() => {
              handleSaveContact();
              navigate('/');
            }}
            className="btn btn-primary w-100"
          >
            SAVE
          </button>
        </div>

        <div className="d-flex align-items-left">
          <a href="./">or Back to Contacts</a>
        </div>
      </div>
    </>
  );
};




