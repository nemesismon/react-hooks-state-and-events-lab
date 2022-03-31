import React, {useState} from "react";

function Item({ name, category }) {
  
  const [isAdded, setIsAdded] = useState(false);

  function addItem () {
    setIsAdded((isAdded) => !isAdded);
}

  const inCart = isAdded ? "in-cart" : "";
  const color = isAdded ? "pink" : "yellow";
  const buttonText = isAdded ? "Remove From Cart" : "Add To Cart";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{background: color}} onClick={addItem}>{buttonText}</button>
    </li>
  );
}

export default Item;
