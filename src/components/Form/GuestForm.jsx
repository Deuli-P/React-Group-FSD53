import { useState } from "react";

const GuestForm = ({ addGuest }) => {
  const [newGuest, setNewGuest] = useState({
    name: "",
    age: 0,
    hobbies:""
  });

  //Arg : event State

  // Submit fonction

  // localstorage

  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    addGuest(newGuest);
    setNewGuest({
        name: "",
        age: 0,
        hobbies:""
      })
  }


  function handleChange(e){
    const value = e.target.value
    const propertyName = e.target.name
    setNewGuest( (prevInfo) => {

        return(
            {...prevInfo,
                [propertyName]: value
            }
        )
    }
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        Nom de l&apos;invité:
        <input type="text" name="name" value={newGuest.name} onChange={handleChange}/>
      </label>
      <label htmlFor="age">
        L&apos;âge de l&apos;invité:
        <input type="number" name="age" value={newGuest.age} onChange={handleChange}/>
      </label>
      <label htmlFor="hobbies">
        Les centres d&apos;intérêts de l&apos;invité:
        <input type="text" name="hobbies" value={newGuest.hobbies} onChange={handleChange} />
      </label>
      <button >Valider</button>
    </form>
  );
};

export default GuestForm;
