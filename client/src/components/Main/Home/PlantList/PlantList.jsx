import React, {useEffect, useState} from "react";
import axios from "axios"; 
import PlantCard from "./PlantCard";
import { v4 as uuidv4 } from 'uuid';
import { Box, Flex } from "@chakra-ui/react"


const PlantList = () => {
  const [plants, setPlants] = useState([]);


  useEffect(() => {
    const getAllPlants = async () => {
      const resp = await axios.get(
        "http://localhost:3000/plants"
      );
      const plantsData = (resp.data);
      setPlants(plantsData);
    } 
    getAllPlants();

    return () => {
    }
  }, [])

  const paintCard = () => {
  return plants.map((p) =>
  <PlantCard
    key={uuidv4()}
    image_url={p.image_url}
    common_name={p.common_name}
    scientific_name={p.scientific_name}
    climate={p.climate}
    sunlight={p.sunlight}
    watering={p.watering}
   /> 
  )
}

  return (
  <Flex wrap='wrap' align='center' justify='center'>
    {plants ? paintCard() : ""}
  </Flex>
  ) 
};

export default PlantList;
