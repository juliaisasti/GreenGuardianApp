import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { FavPlantContext } from "../../../context/FavPlantContext";
import ProfileCard from "./ProfileCard";
import { Divider } from "@chakra-ui/react";
import FavPlantCard from "./FavPlantCard";

const Profile = () => {
  const [favPlants, setFavPlants] = useState(null);
  useEffect(() => {
    console.log(favPlants);
    const getFavPlants = async () => {
      const resp = await axios.get("http://localhost:3000/fav-plants/");
      const data = await resp.data;
      setFavPlants(data);
    };
    getFavPlants();
    console.log(favPlants);
  }, []);

  return (
    <>
      <Flex align='center' justify='center'>
      <ProfileCard />
      </Flex>
      <Divider />
        <Flex wrap='wrap' align='center' justify='center'>
      {favPlants?favPlants.map((p) => (
        <FavPlantCard
          key={uuidv4()}
          personal_name={p.fav.personal_name}
          plant_id={p.plant.plant_id}
          image_url={p.plant.image_url}
          common_name={p.plant.common_name}
          scientific_name={p.plant.scientific_name}
          climate={p.plant.climate}
          sunlight={p.plant.sunlight}
          watering={p.plant.watering}
          last_watered={p.fav.last_watered}
          water_reminder={p.fav.last_watered}
          status={p.fav.status}
        />
      )):null}
</Flex>
    </>
  );
};

export default Profile;
