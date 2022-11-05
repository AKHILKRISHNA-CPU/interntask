import React from "react";
import"./AddUser.css";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div className="datasearch">
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Name" name="name"/>
        <input placeholder="Email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>

  );
};

export default AddUser;
