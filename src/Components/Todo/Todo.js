import React, {useState} from "react";
import Wrapper from "../Helper/Wrapper";
import NewTodo from "./NewTodo";
import AddItems from "./AddItems";
import ShowMore from "./ShowMore";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [limit, setLimit] = useState(3);
  const [addItems, setAddItems] = useState([]);


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
  


   

  return (
    <>
      <Wrapper>
        <NewTodo inputVal={inputData} onChangeHandle={handleInput} onClickItems = {handleAddItems} />
        <AddItems allItems ={addItems} delItems= {removeItems} limit={limit} />
       {addItems.length > 2 && <ShowMore  showItems={showItem} /> }  
      </Wrapper>
    </>
  );
};

export default Todo;
