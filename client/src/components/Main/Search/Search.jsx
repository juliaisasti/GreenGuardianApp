import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantList from "../Home/PlantList";
import { Input, Flex } from "@chakra-ui/react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

const Search = () => {
  const [plants, setPlants] = useState([]);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getPlant = async () => {
      const resp = await axios.get(
        `http://localhost:3000/plants?common_name=${e.target.plant_searched.value}`
      );
      const plantsData = resp.data;
      setPlants(plantsData);
    };
    getPlant();
  };

  const paintCard = () => {
    return <Card maxW="sm" backgroundColor="green.50" m="10px">
              <CardBody>
                <Image src={plants.image_url} borderRadius="20px" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{plants.common_name}</Heading>
                  <Heading size="sm">{plants.scientific_name}</Heading>
                  <Text>Climate: {plants.climate}</Text>
                  <Text>Sunlight level: {plants.sunlight}</Text>
                  <Text>Watering level: {plants.watering}</Text>
                </Stack>
              </CardBody>
              <CardFooter justify="end"></CardFooter>
            </Card>
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="plant_searched" />
        <button className="search_button">search!!!</button>
      </form>
      {plants?paintCard():''}

      {/* <PlantList /> */}
    </>
  );
};


export default Search;
