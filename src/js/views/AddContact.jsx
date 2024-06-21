import React from "react"
import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";


const AddContact = () => {
   
    return (
        <>
        <div class="px-5">
            <div>
          <h1>Add A New Contact</h1>
          </div>

            <div class="d-flex align-items-left mb-2">
          <p>FULL NAME</p>
          </div>

          <div class="d-flex align-items-left mb-2">
          <input 


          placeholder="Full Name" class="w-100"></input>
          </div>

          <div class="d-flex align-items-left mb-2">
          <p>EMAIL</p>
          </div>

          <div class="d-flex align-items-left mb-2">
          <input placeholder="Email" class="w-100"></input>
          </div>

          <div class="d-flex align-items-left mb-2">
          <p>PHONE</p>
          </div>

          <div class="d-flex align-items-left mb-2">
          <input placeholder="Phone " class="w-100"></input>
            </div>

          <div class="d-flex align-items-left mb-2">
          <p>ADDRESS</p>
          </div>

          <div class="d-flex align-items-left mb-2">
          <input placeholder="Address" class="w-100"></input>
          </div>

        
          <div class="justify-content-center">
          <button class="btn btn-primary w-100">SAVE</button>
          </div>
        
          <div class="d-flex align-items-left" ><a href="./">or Back to Contacts</a>
          </div>



        </div>
        </>

    )
}

export default AddContact;