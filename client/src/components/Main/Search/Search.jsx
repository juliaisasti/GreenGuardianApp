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
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="plant_searched" />
        <button className="search_button">search!!!</button>
      </form>
      <PlantList />
    </>
  );
};


export default Search;
