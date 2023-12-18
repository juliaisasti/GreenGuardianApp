import React, { useContext } from "react";
import FavoriteForm from "./FavoriteForm";
import { FavPlantContext } from "../../../context/FavPlantContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const FavoriteView = () => {

  const { favPlant } = useContext(FavPlantContext);


  return (
    <section className="add_fav_container">
      <Card maxW="sm" backgroundColor="green.50" m="10px">
              <CardBody>
                <Image src={favPlant.image_url} borderRadius="20px" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{favPlant.common_name}</Heading>
                  <Heading size="sm">{favPlant.scientific_name}</Heading>
                  <Text>Climate: {favPlant.climate}</Text>
                  <Text>Sunlight level: {favPlant.sunlight}</Text>
                  <Text>Watering level: {favPlant.watering}</Text>
                </Stack>
              </CardBody>
              <CardFooter justify="end"></CardFooter>
            </Card>
      <FavoriteForm />
    </section>
  );
};

export default FavoriteView;
