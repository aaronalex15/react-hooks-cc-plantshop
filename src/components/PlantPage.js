import React from "react";
import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [query, setQuery] = useState("")
  const [plantList, setPlantListings] = useState([]) 

  const addPlant = (formData) => {
    setPlantListings([...plantList, formData])
  }
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search query={query} setQuery={setQuery}/>
      <PlantList query={query} plantList={plantList} setPlantListings={setPlantListings}/>
    </main>
  );
}

export default PlantPage;
