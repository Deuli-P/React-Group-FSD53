const Delete = ({ onDelete }) => {
  return (
    <button className="btn delete" onClick={() => onDelete()}>
      Delete
    </button>
  );
};

export default Delete;
