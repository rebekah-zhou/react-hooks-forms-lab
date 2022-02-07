import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBarValue, setSearchBarValue] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchBarValue(e.target.value)
  }

  function matchSearchedItem (item) {
    return item.name.includes(searchBarValue)
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchBarValue.length === 0) {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory
    } else {
      if (selectedCategory === "All") {
        return matchSearchedItem(item)
      } else {
        return matchSearchedItem(item) && item.category === selectedCategory
      }
    }
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
