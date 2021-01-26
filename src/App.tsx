import { useState } from "react";
import AddContactForm from "./AddContactForm";
import Contact from "./Contact";

interface ContactObjet {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
}

const App: React.FC = () => {
  const [contacts, setContacts] = useState<ContactObjet[]>([
    {
      id: "p9n51g",
      name: "Alice",
      email: null,
      phone: "0909090909",
    },
    {
      id: "8mopn7",
      name: "Bob",
      email: "bob@gmail.com",
      phone: null,
    },
    {
      id: "u7oo0d",
      name: "Paul",
      email: "paul@gmail.com",
      phone: null,
    },
  ]);

  return (
    <div className="app">
      <h1 className="title">Contacts</h1>
      <div className="contacts">
        {contacts.map((contact) => {
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            onDelete={() => {
              setContacts(contacts.filter((item) => item.id !== contact.id));
            }}
          />;
        })}
      </div>

      <AddContactForm onAddContact={onAddContact} />
    </div>
  );
};
function randomShortId(): string {
  return Math.random().toString(36).substring(7);
}
export default App;
