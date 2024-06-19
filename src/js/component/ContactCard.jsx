import React from "react";

const ContactCard = ({name, phone, email, address}) => {
   
    return (
        <>
            <div>
                <div className="contact">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                    <div className="contact-info">
                        <p className="contact-name">{name}</p>
                        <p className="contact-phone">{phone}</p>
                        <p className="contact-email">{email}</p>
                        <p className="contact-address">{address}</p>
                    </div>
                </div>
            
            </div>
        </>

    );
}

export default ContactCard;