import React, {useEffect, useState} from "react";
import Wrapper from "../Helper/Wrapper";
import NewTodo from "./NewTodo";
import AddItems from "./AddItems";
import ShowMore from "./ShowMore";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [limit, setLimit] = useState(3);
  const [addItems, setAddItems] = useState(JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : []);


  //handle change function
  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  // handle add items
  const handleAddItems = () => {
    inputData && setAddItems([...addItems , inputData])     
    setInputData('')
  }

  //handle show more
  const showItem = () => {
   return setLimit((prev) => prev + 1)
  }

  //handle del items
const removeItems = (id) => {
  setAddItems(addItems.filter((item ,ind) =>  ind !== id ))  
}

  //handle del items
  const editItems = (id) => {
    removeItems(id)
    setInputData(addItems.filter((item ,ind) =>  ind === id ))
  }
 
 // set value in localStorage whenever newsLetter array changed
 useEffect(() => {
  localStorage.setItem("data", JSON.stringify(addItems));
}, [addItems]);

   

  return (
    <>
      <Wrapper>
        <NewTodo inputVal={inputData} onChangeHandle={handleInput} onClickItems = {handleAddItems} />
        <AddItems allItems ={addItems} delItems= {removeItems} editItem={editItems} limit={limit} />
       {addItems.length > 2 && <ShowMore  showItems={showItem} /> }  
      </Wrapper>
    </>
  );
};

export default Todo;
