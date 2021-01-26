import React from "react";

interface Props {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  onDelete: () => void;
}

const Contact: React.FC<Props> = ({ id, name, phone, email, onDelete }) => {
  return (
    <div className="contact">
      <div className="infos">
        <h2>{name}</h2>
        {email !== null && <p>{email}</p>}
        {phone !== null && <p>{phone}</p>}
      </div>
      <button className="remove" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
