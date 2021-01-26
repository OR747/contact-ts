import { FunctionComponent, useState } from "react";

interface Props {
  onAddContact: (name: string, phone: string | null) => void;
}
const AddContactForm: FunctionComponent<Props> = ({ onAddContact }) => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const onSubmit = () => {
    if (nameInput.length <= 0) {
      return;
    }
    onAddContact(nameInput, phoneInput.length > 0 ? phoneInput : null);
    setPhoneInput("");
    setNameInput("");
  };
  return (
    <div className="add">
      <input
        placeholder="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        placeholder="phone"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default AddContactForm;
