import React from "react";

const NewTodo = ({inputVal , onChangeHandle ,onClickItems}) => {


  return (
    <>
      <div className="newtodo-container shadow">
        <h1 className="newtodo-container__title">New Todo</h1>
        <div className='input-group  '>
          <input type='text' className=' form-control me-2  input' value={inputVal} onChange={onChangeHandle}  />
          <button className="newtodo-container__btn " onClick={onClickItems}>Add Item</button>
        </div>
      </div>
    </>
  );
};

export default NewTodo;
