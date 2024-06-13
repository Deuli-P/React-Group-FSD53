import { toast } from "react-toastify";
import Cancel from "./Button/Cancel";
import Confirm from "./Button/Confirm";
import { useState } from "react";

const GuestEdit = ({ onEdit, onCancel, name }) => {
  const [editName, setEditName] = useState(name);


  const handleEdit = () => {
    onEdit(editName);
    
  };



  const handleCancel = () => {
    setEditName(name);
    onCancel();
  };
  return (
    <div>
      <input value={editName} onChange={(e) => setEditName(e.target.value)} />
      <Confirm onEdit={handleEdit} />
      <Cancel onCancel={handleCancel} />
    </div>
  );
};

export default GuestEdit;
