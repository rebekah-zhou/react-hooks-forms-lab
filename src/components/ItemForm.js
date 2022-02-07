import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit} ) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemName, setItemName] = useState("")


  
  function handleNameChange(e) {
    setItemName(e.target.value)
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value)
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onItemFormSubmit(newItem)
      }} className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
