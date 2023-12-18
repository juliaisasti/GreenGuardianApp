import React, { useContext } from "react";
import axios from "axios";

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

const FavPlantCard = ({
  personal_name,
  plant_id,
  common_name,
  image_url,
  scientific_name,
  climate,
  sunlight,
  watering,
  last_watered,
  water_reminder,
  status,
  deleteFav
}) => {

  return (
    <Card maxW="sm" backgroundColor="green.50" m="10px">
      <CardBody>
        <Image src={image_url} borderRadius="20px" />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{personal_name}</Heading>
          <Heading size="md">{common_name}</Heading>
          <Heading size="sm">{scientific_name}</Heading>
          <Text>Climate: {climate}</Text>
          <Text>Sunlight level: {sunlight}</Text>
          <Text>Watering level: {watering}</Text>
          <Text>Have you watered your plant?</Text>
          <Text>Last watered on the {last_watered}</Text>
          <Text>Should be watered on the {water_reminder}</Text>
        </Stack>
      </CardBody>
      <CardFooter justify="end">
        <Button onClick={deleteFav}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default FavPlantCard;
