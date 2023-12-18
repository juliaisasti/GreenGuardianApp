import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';
import { FavPlantContext } from "../../../context/FavPlantContext";
import ProfileCard from "./ProfileCard"
import { Divider } from '@chakra-ui/react'
import FavPlantCard from "./FavPlantCard";


const Profile = () => { 
  const [favPlants, setFavPlants] = useState([])
  
  useEffect(() => {
    const getFavPlants = async () => {
      const resp = await axios.get(
        "http://localhost:3000/fav-plants/"
      );
      const favPlantsData = (resp.data);
      
      setFavPlants(favPlantsData);
    } 
    getFavPlants();
  }, [])

  console.log(favPlants);

  const paintFavCard = () => {
    return favPlants.map((p) =>
    <FavPlantCard
      key={uuidv4()}
      plant_id={p.plant_id}
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
    <>
    <ProfileCard />
    <Divider />    
    <Flex wrap='wrap' align='center' justify='center'>
    {favPlants ? paintFavCard() : ""}
  </Flex>

    </>
  );
};

export default Profile;