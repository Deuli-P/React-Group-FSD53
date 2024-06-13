import { useState } from "react";
import Guest from "./Guest";
import GuestAdd from "./GuestAdd";

const GuestList = () => {
  // List de tout les guest ajouté
  const [guestList, setGuestList] = useState([]);
  const [toaster, setToaster] = useState(false);

  const [currentColor, setCurrentColor] = useState("gray");
 
  const handleSubmit = (guest) => {
    setGuestList([
      ...guestList,
      {
        name: guest,
        color: currentColor,
        id: Math.random(),
      },
    ]);
    {
      currentColor === "gray"
        ? setCurrentColor("blue")
        : setCurrentColor("gray");
    }
  };

  const ToasterCompenent = () => (
    <div className="message-valid">
      <p className="message-text">Guest ajouté</p>
    </div>
  );

  const handleDelete = (id) => {
    const newList = guestList.filter((obj) => obj.id != id);
    setGuestList(newList);
  };

  const handleEdit = (editName, id) => {
    // Creer une nouvelle liste a partir de guestList
    const newList = [...guestList];

    // Selectionner l'element cible avec l'id dans la nouvelle liste
    const elementObject = newList.find((personne) => personne.id === id);

    // Modifie dans la nouvelle liste le nom de l'element
    elementObject.name = editName;

    // change la guestList avec la nouvelle liste pour avoir la modification du nom appliqué
    setGuestList(newList);
  };

  return (
    <>
      <h1>Guest List:</h1>
      <GuestAdd handleGuestAdd={handleSubmit} toasterSetter={setToaster} />
      <ul>
        {guestList.length === 0 && (
          <span>Aucun invité de prevu pour le moment</span>
        )}
        {guestList.map((personne, index) => {
          return (
            <Guest
              key={index}
              item={personne}
              handleDelete={handleDelete}
              onEdit={handleEdit}
            />
          );
        })}
      </ul>
      {toaster && <ToasterCompenent />}
    </>
  );
};

export default GuestList;
