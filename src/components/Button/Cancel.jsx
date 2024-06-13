const Cancel = ({ onCancel }) => {
  return (
    <button className="btn cancel" onClick={() => onCancel()}>
      Annuler
    </button>
  );
};

export default Cancel;
