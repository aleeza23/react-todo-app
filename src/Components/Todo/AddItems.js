import React from "react";

const AddItems = ({ allItems , delItems ,limit,editItem }) => {
  return (
    <>
      {allItems.slice(0,limit).map((val, ind) => (
        <div className="addItems-container" key={ind}>
          <h1 className="addItems-container__title">{val}</h1>
          <i class="fa-solid fa-pen-to-square ms-auto me-3" onClick={() => editItem(ind)} ></i>
          <i className="fa-solid fa-trash" onClick={() => delItems(ind)}></i>
        </div>
      ))}
    </>
  );
};

export default AddItems;

