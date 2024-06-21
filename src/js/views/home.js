import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { ContactCard } from "../component/ContactCard.jsx";


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5">
			<Link to="/add-contact"><button className="btn btn-success">Add Contact</button></Link>
			<div>
				{store.contacts?.map(contact => {
					return (


						<div key={contact.id}>
							<ContactCard key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} />

						</div>


					)
				})}
			</div>

		</div>
	);
}
