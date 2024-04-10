import React from "react";
import { useState } from "react";

function PlantCard({id, name, image, price}) {
  const [inStock, setInStock,] = useState(true)

  const selectInStock = () => {
    setInStock(!inStock);
  }


  return (
    <li className="card" data-testid={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={selectInStock}
        className="primary">In Stock</button>
      ) : (
        <button onClick={selectInStock}
        className="secondary"> Out of Stock</button>
      )}
    </li>
  );
      }

export default PlantCard;
