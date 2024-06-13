import { useState, useRef } from "react";

const GuestAdd = ({ handleGuestAdd, toasterSetter }) => {
  // Nom dans l'input
  const [guest, setGuest] = useState("");

  const inputRef = useRef(null);
  // On active le toaster à l'ajout du guest et on reset le formulaire
  const onAddGuest = () => {
    handleGuestAdd(guest);
    toasterSetter(true);
    resetForm();
  };
  // On lie le state guest avec l'input
  const onChangeValue = (e) => {
    setGuest(e.target.value);
  };
  // On vide l'input et on supprime le toaster après un certain temps
  const resetForm = () => {
    setGuest("");
    setTimeout(() => {
      toasterSetter(false);
    }, 1000);

    inputRef.current.focus();
  };
  return (
    <>
      <label>
        Name:
        <input value={guest} onChange={onChangeValue} ref={inputRef} />
      </label>
      <button onClick={onAddGuest} disabled={guest.length >= 3 ? false : true}>
        Ajouter
      </button>
    </>
  );
};

export default GuestAdd;
