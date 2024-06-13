
import { useState } from "react";
import Delete from "./Button/Delete";
import GuestEdit from "./GuestEdit";

// QU'EST CE QU'ON FAIT AVEC GUEST ?
// Afficher le nom du guest "guest.name"
// Supprimer l'element spécifique au click du bouton "DELETE"
//

const Guest = ({ item, handleDelete, onEdit }) => {
  const { id, name, color } = item;

  const [isUpdate, setIsUpdate] = useState(false);

  

  const handleCancel = () => {
    setIsUpdate(false)
  }


  const handleEdit=(editName)=> {
    onEdit(editName, id)
    setIsUpdate(false)
  }

  return (
    <div className={`guest-container guest-color-${color}`}>
      {!isUpdate ? 
        (
            <div>
                <p>{name}</p>
                <button onClick={() => setIsUpdate(true)} className="btn confirm">
                    EDIT
                </button>
                <Delete onDelete={()=> handleDelete(id)}/>
            </div> 
        )
        : 
        (
            <GuestEdit onEdit={handleEdit} onCancel={handleCancel} name={name}/>
        )
      }
    </div>
  );
};

export default Guest;
