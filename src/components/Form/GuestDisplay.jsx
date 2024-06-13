import GuestForm from "./GuestForm";
import GuestTable from "./GuestTable";
import GuestSelect from "./GuestSelect";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


// Form d'input
// Handle ajout data
// Count localstorage => lastelement.id + 1
// Ajout data guest dans Localstorage

// Select pour afficher les guests
//Options (firstname)

// Tableau des données affichié par guest
// Recuperer data par guest
// afficher


const GuestDisplay = () => {
  // useState array des guests
  const [ guestList, setGuestList ] = useState([]);
  // useState de l'id selectionné
  const [ guestSelected, setGuestSelected ] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true)
  // useState de l'element affiché

  function addGuestToGuestList(formGuest){
    const newGuest = {...formGuest}
    const hobbyArray = newGuest.hobbies?.length > 0 ? newGuest.hobbies.split(' ') : undefined
    newGuest.id = uuidv4()
    newGuest.major = newGuest.age >=18
    newGuest.hobbies = hobbyArray
    setGuestList([...guestList, newGuest])
  }


  useEffect(()=>{
    console.log('getItem');
    const storeList = localStorage.getItem('guestsList')
    setIsFirstRender(false)
    if(storeList){
        setGuestList(JSON.parse(storeList))
        console.log("Des invités ont déja été ajoutés précedement");
    }
    else{
        console.log("localstorage est vide");
    }
  },[])

useEffect(()=>{
    if(isFirstRender){
        return
    }
  localStorage.setItem('guestsList', JSON.stringify(guestList))
  console.log('setItem');
}, [guestList])

  return (
    <main>
      <h1> Soirée Dev:</h1>
      {/* Formulaire */}
      <GuestForm addGuest={addGuestToGuestList}/>
      <h2>Invités:</h2>
      {/* Select */}
      <GuestSelect onSelected={setGuestSelected} list={guestList} />

      <h2>Informations:</h2>
      {/* Tableau */}
      {guestSelected && <GuestTable guest={guestSelected} /> }
    </main>
  );
};


export default GuestDisplay;
