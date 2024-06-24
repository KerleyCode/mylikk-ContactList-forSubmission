const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			//GET SINGLE AGENDA
			loadAgendaContacts: async (contactObj) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/mylikk/contacts");
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({ contacts: data.contacts });
			},

			createNewContact: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/mylikk/contacts", {
					method: "POST",
					body: JSON.stringify(contactObject),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
			},

			deleteContact: async (contactId) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/mylikk/contacts/${contactId}`, {
					method: "DELETE"
				});
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}

				getActions().loadAgendaContacts();
			},

			updateContact: async (contactId, updatedContactData) => {
				const response = await fetch(
					`https://playground.4geeks.com/contact/agendas/mylikk/contacts/${contactId}`,
					{
						method: "PUT",
						body: JSON.stringify(updatedContactData),
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (!response.ok) {
					throw new Error(`${response.status} - ${response.statusText}`);
				}

				const updatedContact = await response.json();
				const updatedContacts = getStore().contacts.map((contact) => {
					if (contact.id === contactId) {
						return updatedContact;
					}
					return contact;
				});
				setStore({ contacts: updatedContacts });
				return updatedContact;
			},

		}
	};
};

export default getState;

