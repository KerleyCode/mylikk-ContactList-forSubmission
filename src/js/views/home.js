import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { ContactCard } from "../component/ContactCard.jsx";


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-end mt-5">
			<div  className="text-end mt-5 px-5">
			<Link to="/add-contact"><button className="btn btn-success">Add new Contact</button></Link>
			</div>
			<div className="px-5 mt-3">
				{store.contacts?.map(contact => {
					return (

						<ContactCard key={contact.id}
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							id={contact.id} />


					)
				})}
			</div>

		</div>
	);
}