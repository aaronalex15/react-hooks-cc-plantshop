import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard"

function PlantList({query, plantList, setPlantListings}) { 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlantListings(data))
  }, [ ])

const filteredList = plantList.filter((plant) => {
return plant.name.toLowerCase().includes(query.toLowerCase())
})

    const plantCards = filteredList.map(({id, name, image, price}) => {
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
