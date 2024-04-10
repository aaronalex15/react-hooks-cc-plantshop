import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard"

function PlantList() {

  const [listings, setListings] = useState([])  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setListings(data))
  }, [ ])

    const plantCards = listings.map(({id, name, image, price}) => {
      return (
      <PlantCard 
      key={id}
      id={id} 
      name={name} 
      image={image} 
      price={price} 
  />
      )
    });

return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
