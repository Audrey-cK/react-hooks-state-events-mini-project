import React from "react";

const Task = ({ task, onDelete }) => {
  const { id, text, category } = task;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
};

export default Task;